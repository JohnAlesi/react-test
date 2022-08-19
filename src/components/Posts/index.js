import React, { useEffect, useState } from 'react';
import { usePosts } from '../../hooks/useApi';
import Post from './components/Post';

const Posts = () => {
  const { getPosts } = usePosts();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPosts([]);
  }, [posts])
  
  return (
    <div className="posts">
      {!error && (
        <div className="alert">
          Can't load posts due to an error.
        </div>
      )}
      { posts.map(post => (<Post {...post} />)) }
    </div>
  )
}

export default React.memo(Posts);