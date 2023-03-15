<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<template>
    <div id="show-view" class="min-w-screen h-full min-h-screen w-full bg-slate-300">
        <div
            class="flex h-[20vmin] min-h-[10rem] w-full flex-col items-center justify-center shadow-md drop-shadow-md max-sm:h-[30vmax]">
            <img src="https://media.istockphoto.com/id/1287148666/vector/pastel-abstract-shapes-background.jpg?s=612x612&w=0&k=20&c=GJ9SIGnm8LW1ToQFlBchCBy-TZbGxF178dmTgYePM6o="
                alt="" class="absolute -z-[1] h-full w-full object-cover" />
            <h1 class="text-4xl">团队风采</h1>
            <span class="my-3 w-1/2 border-b-2 border-solid border-gray-500"></span>
            <p class="text-xl">这才像个正经团队嘛~🥳</p>
        </div>
        <section-block title="近期动态" linkto="全部动态" link="">
            <card title="最近的一条动态" subTitle="这是一条副标题" auth="军喵" date="2023.3.15"></card>
            <card title="最近的一条动态" subTitle="这是一条副标题" auth="军喵" date="2023.3.15"></card>
            <card title="最近的一条动态" subTitle="这是一条副标题" auth="军喵" date="2023.3.15"></card>
            <card title="最近的一条动态" subTitle="这是一条副标题" auth="军喵" date="2023.3.15"></card>
        </section-block>
        <section-block title="作品展示" linkto="全部作品" link="">
            <card title="置顶的作品1" subTitle="这是一条副标题" auth="军喵" date="2023.3.15"></card>
            <card title="置顶的作品1" subTitle="这是一条副标题" auth="军喵" date="2023.3.15"></card>
            <card title="置顶的作品1" subTitle="这是一条副标题" auth="军喵" date="2023.3.15"></card>
            <card title="置顶的作品1" subTitle="这是一条副标题" auth="军喵" date="2023.3.15"></card>
        </section-block>
        <section-block title="现役主力" linkto="全部人员" link="">
            <profile-card></profile-card>
            <profile-card></profile-card>
            <profile-card></profile-card>
        </section-block>
    </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";
import card from "../components/view/show/card.vue"

export default defineComponent({
    // components: {
    //   NThemeEditor
    // },
    // render() {
    //     return (

    //         //TODO 路由导致的事件响应bug
    //     );
    // },
});
</script>
