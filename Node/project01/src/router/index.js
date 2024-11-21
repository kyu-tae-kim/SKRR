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
      {    
      path: '/hook',
      name: 'hook',
      component: () => import(/* webpackChunkName: "extra" */ '../views/Extra/LifecycleHookView.vue')
      },  
      {    
      path: '/page',
      name: 'page',
      component: () => import(/* webpackChunkName: "reuse" */ '../views/reuse/PageView.vue')
      }, 
      {    
        path: '/grid',
        name: 'grid',
        component: () => import(/* webpackChunkName: "reuse" */ '../views/reuse/GridView.vue')
      }, 
      {    
        path: '/slot',
        name: 'slot',
        component: () => import(/* webpackChunkName: "reuse" */ '../views/reuse/SlotView.vue')
      },
      {    
        path: '/provide',
        name: 'provide',
        component: () => import(/* webpackChunkName: "reuse" */ '../views/reuse/RootView.vue')
      },
      {    
        path: '/custom',
        name: 'custom',
        component: () => import(/* webpackChunkName: "advenced" */ '../views/advenced/CustomDirectiveView.vue')
      },
      // {    
      //   path: '/mixin',
      //   name: 'mixin',
      //   component: () => import(/* webpackChunkName: "advenced" */ '../views/advenced/MixinView.vue')
      // },
      {    
        path: '/plugins',
        name: 'plugins',
        component: () => import(/* webpackChunkName: "advenced" */ '../views/advenced/PluginView.vue')
      },
      {    
        path: '/todo',
        name: 'todo',
        component: () => import(/* webpackChunkName: "advenced" */ '../views/advenced/VuexView.vue')
      },
      {    
        path: '/auth',
        name: 'auth',
        component: () => import(/* webpackChunkName: "apiconnect" */ '../views/ApiConnect/LoginView.vue')
      },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

