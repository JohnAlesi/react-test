import React, { useState } from 'react';
import Post from './components/Post';

export default function Posts () {
  const [error, setError] = useState(null);

  


  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(data => {
  //     setPosts(data);
  //     setError(false);
  //   })
  //   .catch(err =>{
  //     setError(err.message);
  //   })
  // })

  return (
    <div className="posts">
      {!setError && (
        <div className="alert">
          Can't load posts due to an error.
        </div>
      )}
      <Post />
      {/* {!setError && <div className="alert">
          Can't load posts due to an error.
        </div>}
      {posts && <Post/>} */}
    </div> 
  )
}
