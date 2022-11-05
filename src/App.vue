<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { h, onMounted } from 'vue'
const nboptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/'
        },
        { default: () => '回家' }
      ),
    key: 'home',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/show'
        },
        { default: () => '展示' }
      ),
    key: 'show',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/join'
        },
        { default: () => '加入' }
      ),
    key: 'join',
  },
]
const vHeightFix = ()=>{
  document.documentElement.style.setProperty('--vh',`${innerHeight*0.01}px`)
}
onMounted(() => {
  addEventListener('resize',vHeightFix);
  vHeightFix();
})
</script>

<template>
  <n-layout :native-scrollbar="false" position="absolute">
    <n-layout-header position="absolute" class="nav">
      <div class="logo nav">
        <img class="logo" src="./assets/logo.svg">
        <span>萌屋</span>
      </div>
      <n-dropdown trigger="click" :options="nboptions">
        <n-button>点击！</n-button>
      </n-dropdown>
      <div class="route nav">
        <router-link to="/">home</router-link>
        <router-link to="/show">show</router-link>
        <router-link to="/join">join</router-link>
      </div>
    </n-layout-header>
    <n-layout-content style="background: transparent; z-index: 10;">
      <router-view></router-view>
    </n-layout-content>
    <n-layout-footer>
      <span>萌屋研究所🧡</span>
      <span>
        <span>@C.S.N.创新创业实验室</span>
        <span>❤️湘潭大学</span>
      </span>
      <span>💛Kerocate</span>
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">

</script>