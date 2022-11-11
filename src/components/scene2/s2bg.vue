<style scoped>
#bg {
    height: 100%;
    width: 100%;
    box-shadow:
        inset 10vw 0 10vw -10vw rgba(50, 50, 50, 0.4),
        inset -10vw 0 10vw -10vw rgba(50, 50, 50, 0.4);
}

@media (max-aspect-ratio: 1/1) {
    #bg {
        box-shadow:
            inset 10vh 0vh 10vh -10vh rgba(50, 50, 50, 0.4),
            inset -10vh 0 10vh -10vh rgba(50, 50, 50, 0.4);
    }
}
</style>
<template>
    <div ref="bg" id="bg"></div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted } from 'vue';
onMounted(() => {
    gsap.timeline(
        {
            scrollTrigger: {
                trigger: '#scene2',
                toggleActions: 'restart pause revers pause',
                scrub: 0.1,
                start: '5% bottom',
                end: '20% bottom'
            },
        }
    )
        .fromTo('#bg', { backgroundColor: '#FFB3E6' }, { backgroundColor: 'black' })
    gsap.timeline(
        {
            scrollTrigger: {
                trigger: '#scene2',
                toggleActions: 'restart pause revers pause',
                scrub: 0.1,
                start: '60% bottom',
                end: '80% bottom'
            },
        }
    )
        .to('#bg', { backgroundColor: 'white', boxShadow: 'none' })
})
</script>