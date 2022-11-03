<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { h } from 'vue'
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
</script>

<template>
  <n-layout class="main">
    <n-layout-header class="nav">
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
    <n-layout-content>
      <router-view></router-view>
    </n-layout-content>
    <n-layout-footer>
      footer放些啥？没想好.jpg
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">

</script>