import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePostBody, getSingleComment } from '../redux/action-creators';
import PieceOfText from './piece-of-text';

/**
 * @param {string} id
 */

export function GetCommentBody(id) {
  const dispatch = useDispatch();
  useEffect(() => void dispatch(getSingleComment(id)), [dispatch, id]);
  return useSelector((state) => {
    return {
      cmBody: state.comments[id],
    };
  });
}

export function GetPostBody(id) {
  const dispatch = useDispatch();
  useEffect(() => void dispatch(getSinglePostBody(id)), [dispatch, id]);
  return useSelector((state) => {
    return {
      psBody: state.posts[id],
    };
  });
}

export function SingleComment({ id = null }) {
  if (id) {
    const { cmBody } = GetCommentBody(id);
    const commentBody = {};
    Object.assign(commentBody, cmBody);
    return (
      <div className="Linkify notification-body" dir="auto" role="region">
        <PieceOfText text={commentBody.body} />
      </div>
    );
  }
  return null;
}

export function SinglePost({ id = null }) {
  if (id) {
    const { psBody } = GetPostBody(id);
    const postBody = {};
    Object.assign(postBody, psBody);
    return (
      <div className="Linkify notification-body" dir="auto" role="region">
        <PieceOfText text={postBody.body} />
      </div>
    );
  }
  return null;
}
