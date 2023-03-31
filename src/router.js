const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('components/ProductComponent.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('components/Create.vue')
  }
];

export default {
  mode: 'history',
  routes
};
