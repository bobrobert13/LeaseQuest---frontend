import { apolloClient } from '../config/apollo'
import { createApp } from 'vue'
const app = createApp({})

app.config.globalProperties.$apollo = apolloClient