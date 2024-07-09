module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/custom-user/me',
        handler: 'custom-user.me',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'PUT',
        path: '/custom-user/change-role/:id',
        handler: 'custom-user.changeRole',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };