<template>
    <div id="typed"></div>
</template>

<style scoped>
#typed {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12vw;
    letter-spacing: 2vw;
    color: white;
    text-shadow: .2vw .2vw 1vw rgba(0, 0, 0, 0.6);
    font-weight: bold;
    /* backdrop-filter:blur(.1vw); */
    /* background-color: rgba(0, 0, 0, 0.1); */
    box-shadow:
        inset 0 10vw 10vw -10vw rgba(50, 50, 50, 0.4),
        inset 10vw 0 10vw -10vw rgba(50, 50, 50, 0.4),
        inset -10vw 0 10vw -10vw rgba(50, 50, 50, 0.4);
}

@media (max-aspect-ratio: 1/1) {
    #typed {
        font-size: 12vh;
        letter-spacing: 2vh;
        color: white;
        text-shadow: .2vh .2vh 1vh rgba(0, 0, 0, 0.6);
        writing-mode: vertical-lr;
        box-shadow:
            inset 0 10vh 10vh -10vh rgba(50, 50, 50, 0.4),
            inset 10vh 0vh 10vh -10vh rgba(50, 50, 50, 0.4),
            inset -10vh 0 10vh -10vh rgba(50, 50, 50, 0.4);
    }
}
</style>

<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted, onUnmounted } from 'vue';

// gsap.registerPlugin(TextPlugin);
// gsap.registerPlugin(ScrollTrigger);

let typed:gsap.core.Timeline

onMounted(() => {
    typed = gsap.timeline({
        // scrollTrigger: {
        //     trigger: '#typed',
        //     toggleActions: "play pause resume reset",
        // },
        repeat: -1,
        repeatDelay: 2
    }).from('#typed', { duration: 1, text: "萌屋研究所" })
        .to('#typed', { duration: 1, text: "萌屋工作室" })
        .to('#typed', { duration: 2, text: "不一样的快乐" })
        .to('#typed', { duration: 1, text: "萌屋研究所" });
})

onUnmounted(() => {
    typed.kill()
})
</script>