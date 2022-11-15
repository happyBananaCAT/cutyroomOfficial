<script setup lang="ts">
import { ref, onMounted } from '@vue/runtime-core';
import { ScrollTrigger } from 'gsap/all';
import { el } from 'redom';
const sanhua = ref<HTMLElement>();
const hua = [
    '🚀', '🌈', '🧡', '💛',
    '❤️', '😍', '😇', '😘',
    '💕', '🤣', '😘', '🥰',
    '🤗', '👾', '👽', '👻',
    '🤖', '👀', '🐣', '👴',
    '✌️', '🎈', '🎃', '✨',
    '🎉', '🎊', '💎', '🎶',
    '🎵', '💊', '💣', '🔋',
    '🍕', '🍔', '🍟', '🌭',
    '🍿', '🍣', '🍥', '🍩',
    '🍪', '🍈', '🍑', '🍋',
    '🍊', '🌝', '💧', '💖'
]; //48



function genHua(timeline: gsap.core.Timeline,target:gsap.TweenTarget,from:gsap.TweenVars,to:gsap.TweenVars) {
    let doms: HTMLElement[] = [];
    for (let index = 0; index < 10; index++) {
        doms[index] = el('span', hua[Math.floor(Math.random() * hua.length)]);
        doms[index].classList.add(target!.toString());
        sanhua.value?.appendChild(doms[index]);
    }
    timeline.set(target,from).to(target,to);
}

onMounted(() => {
    ScrollTrigger.create({
        trigger: '#sanhua',
        toggleActions: "play pause resume reset",
        onEnter: () => { 
            // genHua(aniHuaL);
            // genHuaR
        }
    })

})

</script>

<template>
    <div ref="sanhua" id="sanhua">
        <div class="hua"></div>
    </div>
</template>

<style scoped>

</style>