import { apolloClient } from '../config/apollo'
import { createApp } from 'vue'
import { createPinia } from 'pinia';
const app = createApp({})
const pinia = createApp();

app.config.globalProperties.$apollo = apolloClient;
app.config.globalProperties.$pinia = pinia;
