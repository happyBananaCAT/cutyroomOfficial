<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    div {
            width: 60%;
            height: 15%;
            border-radius: 100%;
            border: black 1px;
            display: flex;
            box-shadow: inset 10px 20px 30px rgba(0, 0, 0, 0.5),
            10px 10px 20px rgba(0, 0, 0, 0.3),
            15px 15px 30px rgba(0, 0, 0, 0.5),
            inset -10px -10px 15px rgb(254, 252, 252);
            transition: all 2s ease 0s;
            /* animation: action 3s ease 1 alternate paused;
            animation-fill-mode: forwards; */
        }
    p{
        writing-mode: vertical-rl;
        padding: 30%;
        opacity: 0;
        animation-fill-mode: forwards;
        transition: all 2s ease 0s;
        overflow: hidden;
        white-space:nowrap;
    }
    p:hover{
        animation-play-state: running;
        opacity: 1;
    }
    div:hover{
        border-radius: 0;
        height: 50%;
        backdrop-filter:blur(15px);
        border-radius: 1.25rem
    }
    
        /* @keyframes action {
            50% {
                border-radius: 0;
                height: 50%;
                backdrop-filter:blur(7.5px);
            }
            100%{
                border-radius: 0;
                height: 50%;
                backdrop-filter:blur(15px);
            }
           
        }

    @keyframes vis {
        50%{
            opacity: 0;
           
        }
        100%{
            opacity: 1;
            backdrop-filter:blur(15px);
        }
    } */
</style>
<template>
    <div class=" m-auto mt-[5vmin]">
        <p class="text-4xl text-center">{{ content }}</p>
    </div>
</template>
    <script setup lang="ts">
export interface Props {
   content:string;
}
const props = withDefaults(defineProps<Props>(), {
    content:'随便写几个字',
})
</script>
