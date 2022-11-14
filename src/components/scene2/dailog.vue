<template>
    <div id="dailog">
        Surprise!
    </div>
</template>

<style scoped>
#dailog {
    position: fixed;
    width: 90%;
    height: 10rem;
    margin: 0 5%;
    padding: 0 3vw;
    color: white;
    border: 5px solid #FFFFFF;
    background-color: #000000;
    z-index: 1;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.5);
    font-size: 2rem;
}
</style>

<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/all';
import * as mm from "@magenta/music/es6";
import type { NoteSequence } from "@magenta/music/es6";
const player = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');
const loadMidi = mm.urlToNoteSequence('/src/assets/midis/YourBestFriend.mid')
let midiData: NoteSequence;
loadMidi.then(data => {
    player.loadSamples(data);
    player.resumeContext();
    midiData = data;
})
onMounted(() => {
    let matchMedia = gsap.matchMedia();
    matchMedia.add(
        { 
            isMobile: '(max-aspect-ratio: 1/1)'
            // isDesktop:'(min-aspect-ratio: 1/1)'
        },
        (context) => {
            let { isMobile } = context.conditions;
            console.log(context.conditions);
        }
    )
    ScrollTrigger.defaults({
        trigger: '#scene2',
        toggleActions: 'restart pause revers pause',
        scrub: .1,
    })
    gsap.set(
        '#dailog',
        {
            yPercent: 0,
        }
    )
    gsap.timeline({
        scrollTrigger: {
            // pin: true,
            start: '5% bottom',
            end: '20% bottom',
            onEnter: () => {
                player.resumeContext();
                player.start(midiData);
            }
        }
    })
        .to(
            '#dailog',
            {
                yPercent: -120,
                z: 1,
                scale: 1
            }
        )
    gsap.timeline({
        scrollTrigger: {
            start: '20% bottom',
            end: '60% bottom',
            onLeave: () => {
                player.pause();
            },
            onUpdate: () => {
                if (player.getPlayState() === 'stopped') {
                    player.resumeContext();
                    player.start(midiData);
                }
            }
        }

    })
        .to('#dailog', { text: '', fontSize: '2rem' })
        .to('#dailog', { text: '你肯定很疑惑为什么我在这里...' })
        .to('#dailog', { text: '', fontSize: '2.5rem' })
        .to('#dailog', { text: '哇哈哈哈！！！！' })
        .to('#dailog', { text: '......其实我也不知道' })
        .to('#dailog', { text: '', fontSize: '1.8rem' })
        .to('#dailog', { text: '如你所见网站用了很多版权素材，很良心的在站点末尾做了感谢与声明。' })
        .to('#dailog', { text: '', fontSize: '2rem' })
        .to('#dailog', { text: '作为非盈利以梦想而凝聚的小组，显然知道版权的重要。' })
        .to('#dailog', { text: '' })
        .to('#dailog', { text: '为啥要我解释Fair use的事情？？？有问题Github会解决的。', fontSize: '1.8rem' })
        .to('#dailog', { text: '', fontSize: '2.5rem' })
        .to('#dailog', { text: '好了，我该走了......' })
        .to('#dailog', { yPercent: 0 })

})
</script>