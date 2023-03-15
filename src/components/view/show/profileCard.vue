<template>
    <a :href="props.link"
        class="mb-8 mx-2 flex aspect-[2/1] w-[32rem] cursor-pointer overflow-clip rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
        <div class="flex w-1/3 flex-col items-center justify-center bg-slate-300 px-4">
            <img :src="props.pic" alt=""
                class="rounded-full object-cover" />
            <span class="mt-2 text-2xl font-bold"> {{ props.name }} </span>
            <span class="text-xl"> {{ props.job }} </span>
        </div>
        <div class="flex w-2/3 flex-col p-2">
            <span class="my-2 ml-2 text-2xl font-bold">个人介绍</span>
            <span class="overflow-hidden mx-3"
                style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 10;"> {{ props.intro }} </span>
        </div>
    </a>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script setup lang="ts">
export interface Props {
    name: string
    job: string
    pic: string
    intro: string
    link: string
}

const props = withDefaults(defineProps<Props>(), {
    name: "无名氏",
    job: "摸鱼",
    pic: "https://pic1.zhimg.com/v2-a9c966774c2d1f924a3ffe3fb85db199_720w.jpg?source=172ae18b",
    intro: "个人介绍非常耗时不知道该怎么去处理",
    link:' '
})
</script>