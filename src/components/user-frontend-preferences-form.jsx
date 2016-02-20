import React from 'react'

import {preventDefault} from '../utils'
import throbber16 from 'assets/images/throbber-16.gif'

export default class UserFrontendPreferencesForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.preferences
  }

  componentWillReceiveProps = (newProps) => {
    this.setState(newProps.preferences)
  }

  changeDisplayOption = (event) => {
    this.setState({
      displayNames: {
        ...this.state.displayNames,
        displayOption: parseInt(event.target.value, 10)
      }
    })
  }

  changeUseYou = (event) => {
    this.setState({
      displayNames: {
        ...this.state.displayNames,
        useYou: event.target.checked
      }
    })
  }

  savePreferences = () => {
    if (this.props.status !== 'loading') {
      this.props.updateFrontendPreferences(this.props.userId, this.state)
    }
  }

  render() {
    return (
      <form onSubmit={preventDefault(this.savePreferences)}>
        <h3>Display preferences</h3>

        <p>How user names should appear:</p>

        <div className="radio">
          <label>
            <input type="radio" name="displayOption" value="1" checked={this.state.displayNames.displayOption === 1} onChange={this.changeDisplayOption}/>
            Display name only
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="displayOption" value="2" checked={this.state.displayNames.displayOption === 2} onChange={this.changeDisplayOption}/>
            Display name + username
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="displayOption" value="3" checked={this.state.displayNames.displayOption === 3} onChange={this.changeDisplayOption}/>
            Username only
          </label>
        </div>

        <div className="checkbox checkbox-displayNames-useYou">
          <label>
            <input type="checkbox" name="useYou" value="1" checked={this.state.displayNames.useYou} onChange={this.changeUseYou}/>
            Show your own name as "You"
          </label>
        </div>

        <p>
          <button className="btn btn-default" type="submit">Update</button>
          {this.props.status === 'loading' ? (
            <span className="settings-throbber">
              <img width="16" height="16" src={throbber16}/>
            </span>
          ) : false}
        </p>

        {this.props.status === 'success' ? (
          <div className="alert alert-info" role="alert">Updated!</div>
        ) : this.props.status === 'error' ? (
          <div className="alert alert-danger" role="alert">{this.props.errorMessage}</div>
        ) : false}
      </form>
    )
  }
}