const postsEndpoint = {
  getPosts: (instance) => {
    return instance.get('/posts');
  },
  getPost: (instance, id) => instance.get('/posts/' + id)
}

export default postsEndpoint