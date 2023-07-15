<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .back {
        backdrop-filter:blur(10px);
    }
</style>
<template>
        <span class="font-black w-1/2 text-xl">{{ problem }}</span><br>
</template>
<script setup lang="ts">
export interface Props {
    problem:string
    
}
const props = withDefaults(defineProps<Props>(), {
    problem:'你是二次元吗？',
})
</script>