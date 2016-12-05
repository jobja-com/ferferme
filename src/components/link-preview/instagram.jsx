import React from 'react';
import _ from 'lodash';

import ScrollSafe from './scroll-helpers/scroll-safe';

const INSTAGRAM_RE = /^https?:\/\/(?:www\.)?instagram\.com\/p\/([a-z0-9]+(?:[_-][a-z0-9]+)*)/i;

export function canShowURL(url) {
  return INSTAGRAM_RE.test(url);
}

const initialState = {
  isPrivate: false,
};

class InstagramPreview extends React.Component {
  iframe = null;
  setIframe = el => this.iframe = el;

  state = {...initialState};

  onIFrameLoad = () => setTimeout(() => {
    if (!this.iframe.dataset['loaded']) {
      this.setState({isPrivate: true});
    }
  }, 1000);

  componentDidMount() {
    startEventListening();
    // set default frame height
    this.iframe.style.height = (470 / 400 * this.iframe.offsetWidth) + 'px';
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.setState({...initialState});
    }
  }

  render() {
    const id = INSTAGRAM_RE.exec(this.props.url)[1];
    if (this.state.isPrivate) {
      return null;
    }
    return (
      <div className="instagram-preview">
        <iframe
          ref={this.setIframe}
          src={`https://www.instagram.com/p/${id}/embed/captioned/`}
          onLoad={this.onIFrameLoad}
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
          className="instagram-iframe"/>
      </div>
    );
  }
}

export default ScrollSafe(InstagramPreview);

const startEventListening = _.once(() => window.addEventListener("message", onMessage));

function onMessage(e) {
  if (e.origin !== 'https://www.instagram.com') {
    return;
  }

  let data = null;
  try {
    data = JSON.parse(e.data);
  } catch (e) {
    return;
  }

  if (
    typeof data !== 'object' ||
    typeof data.type !== 'string' ||
    typeof data.details !== 'object'
  ) {
    return;
  }

  const frames = document.querySelectorAll('iframe.instagram-iframe');
  const frame = [...frames].find(fr => fr.contentWindow === e.source);
  if (frame) {
    if (data.type === 'MEASURE') {
      frame.style.height = data.details.height + 'px';
    } else if (data.type === 'LOADING') {
      frame.dataset['loaded'] = '1';
    }
  }
}