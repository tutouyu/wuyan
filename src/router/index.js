import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Attestation = () => import('../views/Attestation/Attestation.vue')
const AttestationWay = () => import('../views/Attestation/AttestationWay.vue')
const AttestationRes = () => import('../views/Attestation/AttestationRes.vue')
const routes = [
  {
    path: '',
    redirect: '/Attestation'
},
{
    path:'/Attestation',
    component: Attestation
},
{
    path:'/AttestationWay',
    component: AttestationWay
},
{
  path:'/AttestationRes',
  component: AttestationRes
},
]

const router = new VueRouter({
  routes
})

export default router
