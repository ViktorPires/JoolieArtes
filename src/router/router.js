import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/views/Home.vue'
import LoginPage from '@/views/Login.vue'
import ProdutosPage from '@/views/Produtos.vue'
import SobrePage from '@/views/Sobre.vue'
import ContatoPage from '@/views/Contato.vue'
import SacolaPage from '@/views/Sacola.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/produtos',
        name: 'produtos',
        component: ProdutosPage
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: SobrePage
    },
    {
        path: '/contato',
        name: 'contato',
        component: ContatoPage
    },
    {
        path: '/sacola',
        name: 'sacola',
        component: SacolaPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router