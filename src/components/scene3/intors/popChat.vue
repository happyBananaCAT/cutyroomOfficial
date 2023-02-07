<style scoped>
.outer {
    display: flex;
    font-size: 5vmin;
    margin-top: 1rem;
    content-visibility: auto;
}

.avatar {
    display: block;
    position: absolute;
    height: 10vmin;
    width: 10vmin;
    border-radius: 50%;
    z-index: -1;
}

.chat {
    min-width: 0%;
    max-width: 60%;
    margin: 0;
    border-radius: 4vmin;
}

.chat>div {
    display: flex;
    word-wrap: break-word;
    overflow-wrap: break-word;
    flex-direction: column;
    flex-wrap: nowrap;
    flex-basis: content;
    align-content: center;
    justify-content: center;
    align-items: stretch;
    padding: 2vmin 4vmin;
}

/* -------------------------------------- */

.outer[type=left] {
    margin-left: 2vw;
}

.avatar[type=left] {
    left: 0vmin;
}

.chat[type=left] {
    left: 14vmin;
    background-color: gainsboro;
}

.chat[type=left]::before {
    content: '';
    display: block;
    position: absolute;
    left: -1vmin;
    top: 4vmin;
    height: 4vmin;
    width: 4vmin;
    border-top: 1vmin solid gainsboro;
    border-right: 1vmin solid gainsboro;
    transform: rotate(-135deg);
    background-color: gainsboro;
    z-index: -1;
}

/* --------------------------------------------- */

.outer[type=right] {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 2vw;
}

.avatar[type=right] {
    right: 0vw;
}

.chat[type=right] {
    color: white;
    right: 14vmin;
    background-color: var(--brand-color);
}

.chat[type=right]::before {
    content: '';
    display: block;
    position: absolute;
    right: -1vmin;
    top: 4vmin;
    height: 4vmin;
    width: 4vmin;
    border-top: 1vmin solid var(--brand-color);
    border-right: 1vmin solid var(--brand-color);
    transform: rotate(-135deg);
    background-color: var(--brand-color);
    z-index: -1;
}
</style>

<style>
.outer>.chat>div img {
    max-width: 100%;
    height: auto;
    border: 1px solid gainsboro;
    border-radius: 4vmin;
    object-fit: contain;
}
</style>

<template>
    <div :type="props.type" class="outer">
        <img :type="props.type" class="avatar" :src="props.avatarUrl" alt="avatar pic">
        <div :type="props.type" class="chat">
            <div ref="paddingSpan">
                <slot>...</slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';


export interface Props {
    type?: string
    avatarUrl?: string
    // content?: string
}

// let onlyImg = true;
const props = withDefaults(
    defineProps<Props>(),
    {
        type: "left",
        avatarUrl: "src/assets/imgs/a66aa2fd3cb46927540e05cd63cee0f3.gif",
        // content:"..."
    }
)

const paddingSpan = ref<HTMLSpanElement>();

onMounted(() => {
    if (paddingSpan.value?.childNodes) {
        const child = Array.from(paddingSpan.value.childNodes) as HTMLElement[];

        //优化第二版，额外补充后正常
        if (child.slice(1,-1).every(node => node.nodeName === 'IMG' || node.className === 'n-image')) {
            paddingSpan.value.style.setProperty("padding", "0");
        }

        //优化第一版，有bug
        // child.reduce((onlyImg, node) => {
        //     // If the node is an image tag or className equals 'n-image'
        //     if (node.nodeName === 'IMG' || node.className === 'n-image') {
        //         //Continue
        //         return onlyImg
        //     }
        //     else {
        //         //Set onlyImg to false and break from the loop
        //         return false;
        //     }
        // }, onlyImg);
        // //If onlyImg is true
        // if (onlyImg) {
        //     paddingSpan.value.style.setProperty("padding", "0");
        // }
    }
})

</script>