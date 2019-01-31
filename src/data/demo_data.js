export default {
  menuData: [
    {
      id: 1,
      name: '1',
      title: '组织机构管理',
      route_link: ''
    },
    {
      id: 2,
      name: '2',
      title: '人员管理',
      route_link: ''
    },
    {
      id: 3,
      name: '3',
      title: '员工管理',
      route_link: ''
    },
    {
      id: 15,
      name: '4',
      title: '客户管理',
      route_link: '/customer'
    },
    {
      id: 4,
      name: '5',
      title: '项目管理',
      route_link: '/project'
    },
    {
      id: 5,
      name: '6',
      title: '问卷管理',
      children: [
        {
          id: 6,
          name: '6-1',
          title: '编辑问卷',
          route_link: ''
        },
        {
          id: 7,
          name: '6-2',
          title: '发布问卷',
          route_link: ''
        },
        {
          id: 8,
          name: '6-3',
          title: '答卷可视化监测',
          route_link: ''
        }
      ]
    },
    {
      id: 9,
      name: '7',
      title: '兼职团队管理',
      children: [
        {
          id: 10,
          name: '7-1',
          title: '兼职团队分析',
          route_link: ''
        }
      ]
    },
    {
      id: 11,
      name: '8',
      title: '兼职端页面',
      route_link: ''
    },
    {
      id: 12,
      name: '9',
      title: '兼职端答题页面',
      route_link: ''
    },
    {
      id: 13,
      name: '9',
      title: '帮助中心',
      route_link: ''
    },
    {
      id: 14,
      name: '10',
      title: '分发设置',
      route_link: ''
    }
  ],
  customer: [
    {
      id: 1,
      company: '百度',
      department: '',
      contacts: '李广利',
      phone: '13233474068',
      pwd: ''
    }
  ]
}
