<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

#outer {
    height: 100vh;
}
</style>

<script lang="tsx">
import { div } from "@tensorflow/tfjs-core";
import { NThemeEditor } from "naive-ui";
import { defineComponent } from "vue";

export default defineComponent({
    // components: {
    //   NThemeEditor
    // },
    render() {
        return (
            <div class="min-w-screen h-full min-h-screen w-full bg-slate-300">
                <div class="flex h-[20vmin] min-h-[10rem] w-full flex-col items-center justify-center shadow-md drop-shadow-md max-sm:h-[30vmax]">
                    <img src="https://media.istockphoto.com/id/1287148666/vector/pastel-abstract-shapes-background.jpg?s=612x612&w=0&k=20&c=GJ9SIGnm8LW1ToQFlBchCBy-TZbGxF178dmTgYePM6o=" alt="" class="absolute -z-[1] h-full w-full object-cover" />
                    <h1 class="text-4xl">团队风采</h1>
                    <span class="my-3 w-1/2 border-b-2 border-solid border-gray-500"></span>
                    <p class="text-xl">这才像个正经团队嘛~🥳</p>
                </div>
                <div class="relative">
                    <h1 class="py-2 pl-[8vw] text-2xl">近期动向</h1>
                    <a href="" class="absolute right-[8vw] bottom-2 duration-200 hover:text-pink-400">全部动态</a>
                </div>
                <div class="flex h-full w-full flex-wrap justify-evenly px-[8vw]">
                    <a class="mb-8 flex aspect-square h-80 cursor-pointer flex-col overflow-clip rounded-xl bg-white transition-shadow duration-300 hover:shadow-xl">
                        <img src="https://www.qzqn8.com/wp-content/uploads/2022/08/1-6.jpg" alt="" class="h-56 w-full object-cover shadow-md drop-shadow-md" />
                        <div class="relative -top-11 h-24 w-full">
                            <h2 class="relative w-full truncate py-1 pl-1 text-3xl font-bold text-white drop-shadow-lg backdrop-blur-sm backdrop-brightness-90">主标题aaaaaaaaaaaaaaaaaa</h2>
                            <p class="absolute -top-[1.5rem] left-1 text-white" style="text-shadow:0 0 3px rgba(0,0,0,0.8)">作者</p>
                            <p class="absolute -top-[1.5rem] right-1 text-white" style="text-shadow:0 0 3px rgba(0,0,0,0.8)">日期</p>
                            <p class="relative w-full truncate pl-2 font-thin text-gray-500">副标题</p>
                            <p class="h-16 w-full overflow-hidden px-3 text-sm" style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;">向组件传递子元素的方式与向元素传递子元素的方式有些许不同。我们需要传递一个插槽函数或者是一个包含插槽函数的对象而非是数组，插槽函数的返回值同一个正常的渲染函数的返回值一样——并且在子组件中被访问时总是会被转化为一个 vnodes 数组。</p>
                        </div>
                    </a>
                </div>
                <div class="relative border-t-2 border-dotted">
                    <h1 class="py-2 pl-[8vw] text-2xl">作品展示</h1>
                    <a href="" class="absolute right-[8vw] bottom-2 duration-200 hover:text-pink-400">全部作品</a>
                </div>
                <div class="flex h-full w-full flex-wrap justify-evenly px-[8vw] pb-[2vh]">
                    <span>奇怪？怎么什么都没有？……</span>
                </div>
                <div class="relative border-t-2 border-dotted">
                    <h1 class="py-2 pl-[8vw] text-2xl">现役主力</h1>
                    <a href="" class="absolute right-[8vw] bottom-2 duration-200 hover:text-pink-400">全部成员</a>
                </div>
                <div class="flex h-full w-full flex-wrap justify-evenly px-[8vw] pb-[2vh]">
                    <span>奇怪？怎么什么都没有？……</span>
                </div>
            </div>
            //TODO 路由导致的事件响应bug
        );
    },
});
</script>
