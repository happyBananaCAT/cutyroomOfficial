<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<template>
    <a :href="props.link"
        class="mb-8 mx-2 flex aspect-square h-80 cursor-pointer flex-col overflow-clip rounded-xl bg-white transition-shadow duration-300 hover:shadow-xl">
        <img :src="props.cover" alt=""
            class="h-56 w-full object-cover shadow-md drop-shadow-md" />
        <div class="relative -top-11 h-24 w-full">
            <p class="absolute -top-[1.25rem] left-1 text-white" style="text-shadow:0 0 0.3rem rgb(0,0,0,0.9)">{{ props.auth
            }}
            </p>
            <p class="absolute -top-[1.25rem] right-1 text-white" style="text-shadow:0 0 0.3rem rgb(0,0,0,0.9)">{{ props.date
            }}</p>
            <h2
                class="relative w-full truncate py-2 pl-2 text-2xl font-bold text-white drop-shadow-lg backdrop-blur-sm backdrop-brightness-90">
                {{ props.title }}</h2>
            <p class="relative w-full truncate pl-2 font-thin text-gray-500">{{ props.subTitle }}</p>
            <p class="h-16 w-full overflow-hidden px-3 text-sm"
                style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;">
                {{ props.preview }}</p>
        </div>
    </a>
</template>

<script setup lang="ts">


export interface Props {
    title: string
    auth: string
    date: string
    subTitle: string
    preview: string
    link: string
    cover: string
}

const props = withDefaults(defineProps<Props>(), {
    title: "怎么没有标题？",
    auth: "无名氏",
    date: "很久很久以前",
    subTitle: "很懒没有副标题",
    preview: "让我看看内容是什么",
    link: "./",
    cover:"https://www.qzqn8.com/wp-content/uploads/2022/08/1-6.jpg"
})

</script>