import React from 'react';
import PostContent from './PostContent';

const Post = ({ id, title, body }) => {
  return (
    <div id={id} className="post-item">
      <PostContent title={title} body={body} />
    </div>
  )
}

export default Post;