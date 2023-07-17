<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .back {
        backdrop-filter:blur(10px);
    }
</style>
<template>
        <span class="font-black">{{ problem }}</span>
        <textarea v-bind:name=name  v-bind:id=id  cols="40" rows="1" class="resize-none rounded-xl"></textarea>
    <br>
</template>
<script setup lang="ts">
export interface Props {
    problem:string
    must:string
    name:string
    id:string
}
const props = withDefaults(defineProps<Props>(), {
    problem:'请输入你的电话号码，我们不会将您的个人信息泄露',
    name:"name",
    id:'id',
})
</script>