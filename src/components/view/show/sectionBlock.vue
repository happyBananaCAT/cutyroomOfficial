<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<template>
    <div class="relative border-t-2 border-dotted">
        <h1 class="py-2 pl-[8vw] text-2xl">{{ props.title }}</h1>
        <a :href="props.link" class="absolute right-[8vw] bottom-2 duration-200 hover:text-pink-400">{{ props.linkto }}</a>
    </div>
    <div class="flex h-full w-full flex-wrap justify-evenly px-[8vw] pb-[2vh]">
        <slot>这里应该有点别的才对啊？</slot>
    </div>
</template>

<script setup lang="ts">

export interface Props {
    title: string
    link: string
    linkto: string
}

const props = withDefaults(defineProps<Props>(), {
    title: "怎么没有标题？",
    link: "./",
    linkto: "全部展示"
})

</script>