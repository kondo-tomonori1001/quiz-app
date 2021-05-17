import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Index from './components/page/Index';
import Answer from './components/page/Answer';


export default new Router({
  mode: "history",
  routes: [
    //ルーティングの設定
    {
      path: '/',
      component: Index,
      name: 'index',
    },
    {
      path: '/answer',            
      component: Answer,
      name: 'answer',
    },
  ]
});
