import React from 'react';



const PostContent = ({ posts }) => {
  

  return (
    <div className="post-item__content">
      <ol>
        {posts.map((post) => (
          <li key={ post.id}>
            <div>
              <h1>{ post.userId }</h1>
              <h1>{ post.title }</h1>
              <p>{ post.body }</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default PostContent;