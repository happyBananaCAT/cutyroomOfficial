<style scoped>
.scene {
    overflow: hidden;
    background: transparent;
    position: relative;
    /* height: v-bind(viewControl.height()+'px'); 这里的不会计算响应*/
}

.layer {
    position: absolute;
    height: 100%;
    width: 100%;
}

#scroller {
    overflow: scroll;
}

#s1-title {
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
    box-shadow: inset 0 0 10vw rgba(50, 50, 50, 0.4);
}

@media (max-aspect-ratio: 1/1) {
    #s1-title {
        font-size: 12vh;
        letter-spacing: 2vh;
        color: white;
        text-shadow: .2vh .2vh 1vh rgba(0, 0, 0, 0.6);
        writing-mode: vertical-lr;
        box-shadow: inset 0 0 10vh rgba(50, 50, 50, 0.4);
    }
}

.dannmaku {
    position: absolute;
    writing-mode: horizontal-tb;
    /* transform: translateX('100vw'); */
    opacity: 0;
}
</style>

<template>
    <!-- <div style="position: absolute;width:100%;height:100%;top:0;overflow: scroll;"> -->
        <Gravity style="position: absolute; z-index: -1; overflow: hidden;" :width="viewControl.width"
            :height="viewControl.height" :fov="viewControl.fov()" :distance="viewControl.distance()" />
        <div id="gsap-content">
            <div id="scene1" class="scene" :style="{ 'height': viewControl.height + 'px' }">
                <div id="s1-title" class="layer"></div>
                <div ref="s1Dannmaku" id="dannmaku" class="layer">
                    <span class="dannmaku">卧槽这波牛逼</span>
                    <span class="dannmaku">666</span>
                    <span class="dannmaku">弹幕护体！！</span>
                    <span class="dannmaku">前面的不要玩梗</span>
                    <span class="dannmaku">妈诶我手机卡爆了</span>
                    <span class="dannmaku">太强了太强了</span>
                </div>
            </div>
            <div class="scene" :style="{ 'height': viewControl.height + 'px' }"></div>
            <div class="scene" :style="{ 'height': viewControl.height + 'px' }"></div>
            <div class="scene" :style="{ 'height': viewControl.height + 'px' }"></div>
        </div>
    <!-- </div> -->
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { onMounted, reactive, ref,inject } from 'vue';
// const scroller = inject('content-scroller',null);
const s1Dannmaku = ref<HTMLElement>();
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
const viewControl = reactive({
    height: innerHeight,
    width: innerWidth,
    fov: (): number => {
        if (innerHeight < innerWidth) {
            return 85
        }
        return 80
    },
    distance: (): number => {
        if (innerHeight < innerWidth) {
            return 3
        }
        return innerHeight / innerWidth * 2.4
    }
})
onMounted(() => {
    let s1 = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    s1.from('#s1-title', { duration: 1, text: "萌屋研究所" });
    s1.to('#s1-title', { duration: 1, text: "萌屋工作室" });
    s1.to('#s1-title', { duration: 2, text: "不一样的快乐" });
    s1.to('#s1-title', { duration: 1, text: "萌屋研究所" });
    let s1Dannmaku = gsap.timeline({
        scrollTrigger: {
            trigger: '#scene1',
            scroller:"#content-scroller > div.n-scrollbar-rail.n-scrollbar-rail--vertical",
            toggleActions: "play pause resume reset",
            onEnter:()=>{console.log('enter1')},
            onEnterBack:()=>{console.log('enter back')},
            onLeave:()=>{console.log('onleave')},
            onLeaveBack:()=>{console.log('back')}
        },
        defaults: {
            duration: 1,
            ease: "none"
        },
        repeat: -1,
        repeatRefresh: true,
        repeatDelay: 0
    });
    s1Dannmaku
        .set('.dannmaku', {
            x: '100vw',
            xPercent: 100,
            y: 'random(0,100)' + 'vh',
            color: 'random([red,green,blue,yellow,white,orange,purple])',
            opacity: 1
        })
        .to('.dannmaku', {
            duration: 'random(1,3)',
            delay: 'random(1,3)',
            x: '0vw',
            xPercent: -100
        })
    onresize = () => {
        viewControl.width = innerWidth
        viewControl.height = innerHeight
    }
})
</script>