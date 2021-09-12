import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
// import dotenv from 'dotenv'
// import path from 'path'

Vue.use(Router)

// dotenv.config('../.env')
// dotenv.config(path.join(__dirname, ){path: __dirname + '/.env'})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
