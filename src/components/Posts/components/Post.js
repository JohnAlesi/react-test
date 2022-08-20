import React, {useEffect, useState} from 'react';
import PostContent from './PostContent';
import axios from 'axios';




const Post = () => {
  //approach 1
  const [posts, setPosts] = useState([]);
  // const [error, setError] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((results) => {
      setPosts(results.data)
    })
   }, [])

  //approach 2
  // const [error, setError] = useState(null);
  // const [posts, setPosts] = useState([]);
  
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
    <div className="post-item">
      <PostContent posts={posts} />
    </div>
  )
}

export default Post;