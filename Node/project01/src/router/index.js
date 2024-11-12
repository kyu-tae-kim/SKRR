import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
  path: '/string',
name: 'string',
component: () => import(/* webpackChunkName: "string" */ '../views/DataBinding/DataBindingStringView.vue')
},
{
path: '/html',
name: 'html',
component: () => import(/* webpackChunkName: "htmlbinding" */ '../views/DataBinding/HtmlView.vue')
},
{
  path: '/attribute',
  name: 'attribute',
  component: () => import(/* webpackChunkName: "attributebinding" */ '../views/DataBinding/AttributeView.vue')
  },
  {
    path: '/class',
    name: 'class',
    component: () => import(/* webpackChunkName: "classbinding" */ '../views/DataBinding/ClassView.vue')
    },
    {
      path: '/input',
      name: 'input',
      component: () => import(/* webpackChunkName: "inputbinding" */ '../views/DataBinding/InputView.vue')
      },
    {
      path: '/list',
      name: 'list',
      component: () => import(/* webpackChunkName: "listbinding" */ '../views/DataBinding/ListView.vue')
      },
    {
      path: '/SKRR',
      name: 'SKRR',
      component: () => import(/* webpackChunkName: "listbinding" */ '../views/DataBinding/CheckboxSelectRadioView.vue')
      },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

