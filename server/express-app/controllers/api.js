  import express from 'express';

  const router = express.Router();

  // Mock data, this should come from a database....
  const posts = [{
          id: 1,
          title: 'My blog post 1',
          content: '<p>Content</p>',
          author: 'Carlos Santana'
      },
      {
          id: 2,
          title: 'My blog post 2',
          content: '<p>Content</p>',
          author: 'Cristina Rojas'
      },
      {
          id: 3,
          title: 'My blog post 3',
          content: '<p>Content</p>',
          author: 'Carlos Santana'
      }
  ];

  router.get('/', (req, res, next) => {
      res.send(`
      <p>API Endpoints:</p>
      <ul>
        <li>/api/posts</li>
        <li>/api/post/:id</li>
      </ul>
    `);
  });

  router.get('/posts', (req, res, next) => {
      res.json({
          response: posts
      });
  });

  router.get('/post/:id', (req, res, next) => {
      const { params: { id } } = req;

      const singlePost = posts.find(post => post.id === Number(id));

      if (!singlePost) {
          res.send({
              error: true,
              message: 'Post not found'
          });
      }

      res.json({
          response: [singlePost]
      });
  });

  export default router;
  