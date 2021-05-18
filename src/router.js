import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Index from './page/Index';
import Answer from './page/Answer';


export default new Router({
  mode: "history",
  routes: [
    //ルーティングの設定
    {
      path: '/',
      component: Index,
      name: 'index',
      props: true
    },
    {
      path: '/answer',            
      component: Answer,
      name: 'answer',
      props: true
    },
  ]
});
