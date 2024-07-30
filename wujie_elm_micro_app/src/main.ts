import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createCurrentRouter } from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';

const render = () => {
  const router = createCurrentRouter()
  const instance = createApp(App)

  instance.use(createPinia())
  instance.use(router)
  instance.use(ElementPlus)

  instance.mount('#app')
  return instance
}

if (window.__POWERED_BY_WUJIE__) {
  let instance: any
  window.__WUJIE_MOUNT = () => {
    console.info('挂载')
    instance = render()
  }
  window.__WUJIE_UNMOUNT = () => {
    console.info('卸载')
    instance.unmount()
    instance = null
  }
  window.__WUJIE.mount()
} else {
  render()
}
