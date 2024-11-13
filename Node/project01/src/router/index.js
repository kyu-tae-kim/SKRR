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
    component: () => import(/* webpackChunkName: "databinding" */ '../views/AboutView.vue')
  },
  {
  path: '/string',
name: 'string',
component: () => import(/* webpackChunkName: "databinding" */ '../views/DataBinding/DataBindingStringView.vue')
},
{
path: '/html',
name: 'html',
component: () => import(/* webpackChunkName: "databinding" */ '../views/DataBinding/HtmlView.vue')
},
{
  path: '/attribute',
  name: 'attribute',
  component: () => import(/* webpackChunkName: "databinding" */ '../views/DataBinding/AttributeView.vue')
  },
  {
    path: '/class',
    name: 'class',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/DataBinding/ClassView.vue')
    },
    {
      path: '/input',
      name: 'input',
      component: () => import(/* webpackChunkName: "databinding" */ '../views/DataBinding/InputView.vue')
      },
    {
      path: '/list',
      name: 'list',
      component: () => import(/* webpackChunkName: "databinding" */ '../views/DataBinding/ListView.vue')
      },
    {
      path: '/SKRR',
      name: 'SKRR',
      component: () => import(/* webpackChunkName: "databinding" */ '../views/DataBinding/CheckboxSelectRadioView.vue')
      },
    {
      path: '/click',
      name: 'click',
      component: () => import(/* webpackChunkName: "event" */ '../views/Event/ClickView.vue')
      },
    {  
      path: '/change',
      name: 'change',
      component: () => import(/* webpackChunkName: "event" */ '../views/Event/ChangeView.vue')
      },  
    {    
      path: '/key',
      name: 'key',
      component: () => import(/* webpackChunkName: "event" */ '../views/Event/KeyView.vue')
      },  
      {    
      path: '/render',
      name: 'render',
      component: () => import(/* webpackChunkName: "extra" */ '../views/Extra/RenderView.vue')
      },  
      {    
      path: '/show',
      name: 'show',
      component: () => import(/* webpackChunkName: "extra" */ '../views/Extra/RenderShowView.vue')
      }, 
      {    
      path: '/computed',
      name: 'computed',
      component: () => import(/* webpackChunkName: "extra" */ '../views/Extra/ComputedView.vue')
      }, 
      {    
      path: '/watch',
      name: 'watch',
      component: () => import(/* webpackChunkName: "extra" */ '../views/Extra/WatchView.vue')
      }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

