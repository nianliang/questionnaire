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
    path: '/organization_manage',
    meta: {
      title: '组织结构管理'
    },
    component: (resolve) => require(['@/views/main.vue'], resolve),
    children: [
      {
        path: '/organization',
        component: (resolve) => require(['@/views/organization_manage/index.vue'], resolve)
      }
    ]
  },
  {
    path: '/project_manage',
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
  },
  {
    path: '/customer_manage',
    meta: {
      title: '客户管理'
    },
    component: (resolve) => require(['@/views/main.vue'], resolve),
    children: [
      {
        path: '/customer',
        component: (resolve) => require(['@/views/customer_manage/index.vue'], resolve)
      }
    ]
  }
]

export default routes
