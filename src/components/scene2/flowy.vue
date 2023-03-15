<template>
    <div id="s2view">
        <div id="flowy"></div>
        <div id="floor"></div>
        <div id="container">
            <img id="s2avatar" src="../../assets/imgs/by_tobyFox/winkFlowy.png" />
        </div>
    </div>
</template>
<style scoped>
#s2view {
    /* position: fixed; */
    top: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

#s2view>div {
    position: absolute;
}

#floor {
    top: 20vh;
    height: 20vh;
    width: 63.158vh;
    image-rendering: pixelated;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(../../assets/imgs/by_tobyFox/floor.png);
    z-index: 0;
}

#flowy {
    top: 15vh;
    height: 11.5vh;
    width: 10.5vh;
    image-rendering: pixelated;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% center;
    background-image: url(../../assets/imgs/by_tobyFox/flowyRise.png);
    z-index: 1;
}

#container {
    top: 45vh;
    height: 22vh;
    width: 21vh;
    overflow: hidden;
    opacity: 1;
}

#s2avatar {
    left: 0;
    height: 22vh;
    image-rendering: pixelated;
    opacity: 0;
}

@media (max-aspect-ratio: 1/1) {
    #floor {
        top: 20vw;
        height: 20vw;
        width: 63.158vw;
    }

    #flowy {
        top: 15vw;
        height: 11.5vw;
        width: 10.5vw;
    }

    #container {
        top: 40vh;
    }
}
</style>

<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted, onUnmounted } from "vue";
let viewStart: gsap.core.Timeline;
let viewEnd: gsap.core.Timeline;
let flowy: gsap.core.Timeline;
let flowyTalk: gsap.core.Timeline;
let flowySussy: gsap.core.Timeline;
let flowyAnger: gsap.core.Timeline;
let flowyCuty: gsap.core.Tween
onMounted(() => {
    viewStart = gsap.timeline({
        scrollTrigger: {
            // toggleActions: "restart pause revers pause",
            trigger: '#scene2',
            start: "top top",
            end: 'bottom bottom',
        },
    }).to(
        '#s2view', {
        position: 'fixed',
        top: 0
    })
    viewEnd = gsap.timeline({
        scrollTrigger: {
            // toggleActions: "restart pause revers pause",
            trigger: '#scene2',
            start: "bottom bottom",
            snap: 100
        }
    }).to(
        '#s2view', {
        opacity: 0,
        position: 'absolute'
    })

    flowy = gsap.timeline({
        scrollTrigger: {
            // toggleActions: "restart pause revers pause",
            trigger: '#scene2',
            scrub: false,
            start: 'top top',
        }
    }).to(
        '#flowy', {
        backgroundPositionX: 100,
        duration: 1,
        ease: 'steps(3)'
    }).to(
        '#s2avatar', {
        opacity: 1,
    })

    flowyTalk = gsap.timeline({
        scrollTrigger: {
            // toggleActions: "restart pause revers pause",
            trigger: '#scene2',
            scrub: false,
            start: "15% center",
            end: '48% center'
        },
    }).set(
        '#s2avatar', {
        xPercent: -10
    }).to(
        '#s2avatar', {
        duration: .5,
        repeat: -1,
        xPercent: -20,
        ease: 'steps(1)'
    })
    flowySussy = gsap.timeline({
        scrollTrigger: {
            // toggleActions: "restart pause revers pause",
            trigger: '#scene2',
            scrub: false,
            start: "48% center",
            end: "63% center"
        }
    }).set(
        '#s2avatar', {
        xPercent: -30
    }).to(
        '#s2avatar', {
        duration: .5,
        repeat: -1,
        xPercent: -40,
        ease: 'steps(1)'
    })
    flowyAnger = gsap.timeline({
        scrollTrigger: {
            // toggleActions: "restart pause revers pause",
            trigger: '#scene2',
            scrub: false,
            start: "64% center",
            end: "78% center"
        }
    }).set(
        '#s2avatar', {
        xPercent: -50
    }).to(
        '#s2avatar', {
        duration: .5,
        repeat: -1,
        xPercent: -60,
        ease: 'steps(1)'
    })
    flowyCuty = gsap.to('#s2avatar', {
        scrollTrigger: {
            // toggleActions: "restart pause revers pause",
            trigger: '#scene2',
            scrub: false,
            start: "79% center",
        },
        xPercent: 0,
        ease: 'steps(1)'
    })
})

onUnmounted(() => {
    viewStart.kill()
    viewEnd.kill()
    flowy.kill()
    flowyTalk.kill()
    flowySussy.kill()
    flowyAnger.kill()
    flowyCuty.kill()
})
</script>