const routes = [
  /*登录*/
  {
    path: '/',
    component: (resolve) => require(['@/views/index.vue'], resolve)
  },
  /*主界面*/
  {
    path: '/index',
    component: (resolve) => require(['@/views/main.vue'], resolve)
  },
  /*组织结构*/
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
  /*人员管理*/
  {
    path: '/staff_manage',
    meta: {
      title: '人员管理'
    },
    component: (resolve) => require(['@/views/main.vue'], resolve),
    children: [
      {
        path: '/staff',
        component: (resolve) => require(['@/views/staff_manage/index.vue'], resolve)
      }
    ]
  },
  /*项目管理*/
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
  /*客户管理*/
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
