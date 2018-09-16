import Vue from 'vue';
import Router from 'vue-router';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld'
import Test from '../components/Test'//需要跳转的页面 给组件重新命名

Vue.use(Router)

export default new VueRouter({
    routes: [
        { path: '/home', name: 'home', component: HelloWorld },
        //path:路径 component:把你需要的组件挂载进来
        { path: '/Test', name: 'test', component: Test },
        { path: '*', redirect: '/home' } //404/
        //当路径错误或没有这个路径的时候我们会给予一个默认路径
    ]
});
