const routes = [
  {
    path: '/',
    name: 'home',
    component: resolve => require(['@/views/home'], resolve)
  },
  {
    path: '/search',
    name: 'search',
    component: resolve => require(['@/views/search'], resolve)
  },
  {
    path: '/video/:aid',
    name: 'video',
    component: resolve => require(['@/views/video'], resolve)
  },
  {
    path: '/space',
    name: 'space',
    component: resolve => require(['@/views/space'], resolve)
  }
]

export default routes
