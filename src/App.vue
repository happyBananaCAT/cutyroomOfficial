<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { RouterLink, RouterView } from 'vue-router'
import { h, onMounted, ref, provide } from 'vue'
import { More48Regular } from 'vicons/fluent'
// const contentScroller = ref<HTMLElement>().value;
// provide('content-scroller',contentScroller);
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#ffb3e6',
    primaryColorHover: '#ff0066',
    borderColor: '#ffffff',
    // fontWeight:'800',
  }
}
const nboptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/'
        },
        { default: () => 'Home' }
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
        { default: () => 'Show' }
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
        { default: () => 'Join!!' }
      ),
    key: 'join',
  },
]
const vHeightFix = () => {
  document.documentElement.style.setProperty('--vh', `${innerHeight * 0.01}px`)
}
onMounted(() => {
  addEventListener('resize', vHeightFix);
  vHeightFix();
})
</script>

<template>
  <nav class="nav nav-height">
    <div class="logo nav-height">
      <img class="logo" src="./assets/logo.svg">
      <span>萌屋</span>
    </div>
    <n-config-provider :theme-overrides="themeOverrides">
      <n-dropdown trigger="click" :options="nboptions">
        <n-button color="#ff0066" circle size="large" style="
            -webkit-filter: drop-shadow(.1rem .1rem .1rem rgba(200, 25, 95, 0.7));
            filter: drop-shadow(.1rem .1rem .1rem rgba(200, 25, 95, 0.7));
          ">
          <n-icon size="2rem" :component="More48Regular"></n-icon>
        </n-button>
      </n-dropdown>
    </n-config-provider>
  </nav>
  <n-layout-content style="background: transparent; z-index: 10;">
    <router-view></router-view>
  </n-layout-content>
  <footer>
    <n-layout-footer>
      <span>萌屋研究所🧡</span>
      <span>
        <span>@C.S.N.创新创业实验室</span>
        <span>❤️湘潭大学</span>
      </span>
      <span>💛Kerocate</span>
    </n-layout-footer>
  </footer>
  <!-- todo:增加一个授权同意的loading页面，显示自动播放音频和光敏癫痫警告 -->
</template>