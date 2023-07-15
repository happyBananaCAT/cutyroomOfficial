<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    /* .bubble{
        background-color: rgb(229, 229, 229);
    } */

</style>
<template>
    <div class="flex mt-2">
        <div class="pl-2">
        <n-avatar
        round
        :size="48"
        v-bind:style=l_hide
        v-bind:src=avatar
        lazy
        />
    </div>
    <span class="w-[80%]  rounded-md   text-left  font-bold text-lg " v-bind:style=color >
        <span class="content"  >
        {{ content }}
        </span> 
    </span>
    <n-avatar
        round
        :size="48"
        v-bind:style=r_hide
        v-bind:src=avatar
        lazy
    />
    </div>


<br>
</template>

<script setup lang="ts">
export interface Props {
    content:string
    l_hide:string;
    r_hide:string;
    avatar:string;
    color:string;
}
const props = withDefaults(defineProps<Props>(), {
    content:'随便写几个字',
    l_hide:' ',
    r_hide:'visibility:hidden',
    avatar:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
    color:'background-color: rgb(229, 229, 229);',
})
</script>