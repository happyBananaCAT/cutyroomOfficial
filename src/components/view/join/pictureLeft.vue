<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .triangle {
            width: 0;
            height: 0;
            border: 10px solid transparent;
            --tw-bg-opacity: 1;
            border-left-color: rgb(226 232 240 / var(--tw-bg-opacity));
            left:-19px;
            top:30px;
            opacity: 0.0;
            transition: opacity 2s ease 0s ;
        }
        .contentBox{
            opacity: 0.0;
            transition: opacity 2s ease 0s ;
        }
        .picture:hover .contentBox{
            opacity: 1.0;
        }
        .picture:hover .triangle{
            opacity: 1.0;
        }

        
</style>

<template>
    <div class=" w-24 h-24 picture text-xs">
        <div class="w-64 h-24 picture flex">
            
            <div class=" w-24 h-24 relative mr-4">
                <img :src=pic alt="" class="  object-fill ">
            </div>

            <div class=" w-40 h-24  bg-slate-200 text-sm rounded-lg absolute -left-44 contentBox" >
                {{ content }}
            </div>

            <div class="triangle absolute border-r-slate-200"></div>
        </div>
    </div>
</template>


<script setup lang="ts">
export interface Props {
    content:string,
    pic:string,
}
const props = withDefaults(defineProps<Props>(), {
    content:"114514",
    pic:"src/assets/imgs/join/QQ图片20230401140431.jpg",
})
</script>