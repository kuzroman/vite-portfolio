import { createRouter, createWebHistory } from 'vue-router'
// import Home from '/src/components/Home.vue'
// import About from '/src/components/About.vue'
import Game from '/src/pages/index.vue'
import About from '/src/pages/about.vue'
import Contacts from '/src/pages/contacts.vue'
import Portfolio from '/src/pages/portfolio/index.vue'
import PortfolioId from '/src/pages/portfolio/_id.vue'

const routes = [
    {
        path: '/',
        name: 'game',
        component: Game,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio,
    },
    {
        path: '/portfolio/:id',
        name: 'portfolioId',
        component: PortfolioId,
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
