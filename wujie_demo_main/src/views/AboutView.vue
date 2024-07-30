<template>
  <div class="wujie-app">
    <WujieVue
      width="100%"
      height="100%"
      name="wujie-v3"
      :url="url"
      :sync="true"
      :afterUnmount="handleAfterUnmount"
      :afterMount="handleMounted"
      :plugins="[
        {
          patchElementHook
        }
      ]"
    ></WujieVue>
  </div>
</template>
<script lang="ts" setup>
// 处理样式 vite4.x子应用
const patchElementHook = (element: any, iframeWindow: any) => {
  if (element.nodeName === 'STYLE') {
    element.insertAdjacentElement = function (_position: any, ele: any) {
      iframeWindow.document.head.appendChild(ele)
    }
  }
}
// import { useRoute } from 'vue-router';

const handleMounted = () => {
  console.info('微应用挂载完成')
}

const handleAfterUnmount = () => {
  console.info('微应用卸载完成')
}
defineOptions({
  name: 'WujieAppV3'
})
const url = 'http://localhost:5555'
</script>
<style lang="scss">
.wujie-app {
  width: 100%;
  height: 100%;
  transform: translateZ(0px);
}
</style>
