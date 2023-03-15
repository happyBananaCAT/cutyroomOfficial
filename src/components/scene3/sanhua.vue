<script setup lang="ts">
import { ref, onMounted, onUnmounted } from '@vue/runtime-core';
import { ScrollTrigger, gsap } from 'gsap/all';
import type { elementDark } from 'naive-ui';
import { el } from 'redom';
const sanhua = ref<HTMLElement>();
const hua = [
    '🚀', '🪙', '🧡', '💛',
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

let huaTL = gsap.timeline();
let huaTR = gsap.timeline();

let huaLB: gsap.TweenVars = {
    // repeatRefresh: true,
    xPercent: -100,
    yPercent: -100,
    y: '100vh',
    z: 1,
    scale: 1,
    fontSize: 'random(1,10,2)rem',
    ease: 'power1.inOut'
}
let huaRB: gsap.TweenVars = {
    // repeatRefresh: true,
    yPercent: -100,
    x: '100vw',
    y: '100vh',
    z: 1,
    scale: 1,
    fontSize: 'random(1,10,2)rem',
    ease: 'power1.inOut'
}

let huaLM: gsap.TweenVars = {
    repeatRefresh: true,
    delay: 0,
    rotation:'random(0,360,10)',
    y: 'random(10,90,10)vh',
    x: 'random(20,80,10)vw',
    ease: 'power1.inOut'
}
let huaRM: gsap.TweenVars = {
    repeatRefresh: true,
    delay: 0,
    rotation:'random(0,360,10)',
    y: 'random(10,90,10)vh',
    x: 'random(20,80,10)vw',
    ease: 'power1.inOut'
}

let huaLE: gsap.TweenVars = {
    repeatRefresh: true,
    delay: 0,
    xPercent: 100,
    yPercent: 100,
    x: 'random(40,100,10)vw',
    y: '100vh',
    rotation:'random(0,360,10)',
    duration: 'random(0.2,1,0.2)',
    ease: 'power1.in'
}
let huaRE: gsap.TweenVars = {
    repeatRefresh: true,
    delay: 0,
    xPercent: -100,
    yPercent: 100,
    x: 'random(0,60,10)vw',
    y: '100vh',
    rotation:'random(0,360,10)',
    duration: 'random(0.2,1,0.2)',
    ease: 'power1.in'
}


async function genHua(timeline: gsap.core.Timeline, target: gsap.TweenTarget, from: gsap.TweenVars, to: gsap.TweenVars[]) {
    let doms: HTMLElement[] = [];
    for (let index = 0; index < 15; index++) {
        doms[index] = el('span', hua[Math.floor(Math.random() * hua.length)]);
        doms[index].classList.add(target!.toString().replace('.', ''));
        sanhua.value?.appendChild(doms[index]);
        gsap.set(doms[index],from)
    }
    for await (const iterator of to) {
        timeline.to(target, iterator)
    }
}

onMounted(() => {
    ScrollTrigger.create({
        once:true,
        // markers:true,
        pin: true,
        trigger: '#scene3',
        toggleActions: "play none none none",
        start: 'top top',
        end: 'bottom top',
        onEnter: () => {
            genHua(huaTL, '.huaL', huaLB, [huaLM, huaLE]);
            genHua(huaTR, '.huaR', huaRB, [huaRM, huaRE]);
        },
        onLeave: () => {
            while (sanhua.value?.lastChild) {
                sanhua.value.removeChild(sanhua.value.lastChild);
            }
        }
    })

})

</script>

<template>
    <div ref="sanhua" id="sanhua">
    </div>
</template>

<style>
#sanhua {
    top: 0;
}

#sanhua>span {
    position: absolute;
    text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}
</style>