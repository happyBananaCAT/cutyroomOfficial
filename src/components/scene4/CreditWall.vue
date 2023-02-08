<style scoped>

</style>

<template>
    <div v-html="test"></div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import Markdown from 'vue3-markdown-it';

const test = ref('loading…');

fetch('http://localhost:1337/api/articles')
    .then(response => response.json())
    .then(json=>{test.value = json.data[0].attributes.content})

onMounted(() => {
    // fetch('http://localhost:1337/api/articles', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data.data[0].attributes.content)
    //         test = data.data[0].attributes.content
    //     });
})

</script>