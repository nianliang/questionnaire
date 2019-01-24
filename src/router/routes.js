const routes = [
  {
    path: '/',
    component: (resolve) => require(['@/views/index.vue'], resolve)
  },
  {
    path: '/index',
    component: (resolve) => require(['@/views/main.vue'], resolve),
    children: [

    ]
  },
  {
    path: '/project-manage',
    meta: {
      title: '项目管理'
    },
    component: (resolve) => require(['@/views/main.vue'], resolve),
    children: [
      {
        path: '/project',
        component: (resolve) => require(['@/views/project_manage/index.vue'], resolve)
      }
    ]
  }
]

export default routes
