import { createRouter, createWebHistory } from 'vue-router'
// import Home from '/src/components/Home.vue'
// import About from '/src/components/About.vue'
// import Game from '/src/pages/index.vue'
// import About from '/src/pages/about.vue'
// import Contacts from '/src/pages/contacts.vue'
// import Portfolio from '/src/pages/portfolio/index.vue'
// import PortfolioId from '/src/pages/portfolio/_id.vue'
// import Matter from '/src/pages/matter-js.vue'
// const Matter = () => import('/src/pages/matter-js.vue')

const routes = [
    {
        path: '/',
        name: 'game',
        component: () => import('/src/pages/index.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('/src/pages/about.vue'),
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('/src/pages/contacts.vue'),
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('/src/pages/portfolio/index.vue'),
    },
    {
        path: '/portfolio/:id',
        name: 'portfolioId',
        component: () => import('/src/pages/portfolio/_id.vue'),
    },
    {
        path: '/matter',
        name: 'matter',
        component: () => import('/src/pages/matter-js.vue'),
    },
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home,
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: About,
    // },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
