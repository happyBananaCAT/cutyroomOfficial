<template>
    <div id="dailog">Surprise!</div>
</template>

<style scoped>
#dailog {
    position: fixed;
    width: 90%;
    height: 25vh;
    margin: 0 5%;
    padding: 0 3vw;
    color: white;
    border: 5px solid #ffffff;
    background-color: #000000;
    z-index: 5;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.5);
    font-size: 10vh;
}

@media (max-aspect-ratio: 1/1) {
    #dailog {
        height: 40vw;
        font-size: 10vw;
    }
}
</style>

<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted, onUnmounted } from "vue";
import { ScrollTrigger } from "gsap/all";
import * as mm from "@magenta/music/es6";
import type { NoteSequence } from "@magenta/music/es6";

let midiData: null | NoteSequence = null;
const player = new mm.SoundFontPlayer(
    "https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus"
)

let ani: gsap.MatchMedia;

onMounted(() => {
    mm.urlToNoteSequence("/src/assets/midis/YourBestFriend.mid").then(
        value => {
            // console.debug(value);
            player.loadSamples(value).then(
                () => {
                    // player.stop();
                    // player.resumeContext();
                    midiData = value;
                }
            )
        }
    )
    ScrollTrigger.defaults({
        trigger: "#scene2",
        toggleActions: "restart pause revers pause",
        scrub: 0.1,
    });
    ani = gsap.matchMedia().add(
        {
            isMobile: "(max-aspect-ratio: 1/1)",
            isDesktop: "(min-aspect-ratio: 1/1)",
        },
        (context) => {
            let { isMobile } = context.conditions as gsap.Conditions;
            // console.log(context.conditions);
            gsap.set("#dailog", {
                yPercent: 0,
            });
            let show = gsap
                .timeline({
                    scrollTrigger: {
                        start: "3% bottom",
                        end: "33% bottom",
                        onEnter: () => {
                            if (midiData && !player.isPlaying()) {
                                // console.log('enter play');
                                player.resumeContext();
                                player.start(midiData!);
                            }
                        },
                    },
                })
                .to("#dailog", {
                    yPercent: -120,
                    z: 1,
                    scale: 1,
                });
            let dailog = gsap
                .timeline({
                    scrollTrigger: {
                        start: "33% bottom",
                        end: "bottom bottom",
                        snap:[0.0,0.15,0.3,0.35,0.5,0.65,0.8,0.95],
                        scrub: isMobile ? .1 : 1,
                        onUpdate: () => {
                            if (midiData && !player.isPlaying()) {
                                // console.log('enter play');
                                player.resumeContext();
                                player.start(midiData!);
                            }
                        },
                        onLeave: () => {
                            player.stop();
                        }
                    },
                    defaults: {
                        ease: 'power4.inOut'
                    }
                })
                .to("#dailog", { text: "" })
                .to("#dailog", { text: "", fontSize: isMobile ? "10vw" : "7.5vh" })
                .to("#dailog", { text: "你肯定很疑惑为什么我在这里..." })

                .to("#dailog", { text: "" })
                .to("#dailog", { text: "", fontSize: isMobile ? "12vw" : "11vh" })
                .to("#dailog", { text: "哇哈哈哈！！！！" })
                .to("#dailog", { text: "......其实我也不知道" })

                .to("#dailog", { text: "" })
                .to("#dailog", { text: "", fontSize: isMobile ? "7vw" : "5.5vh" })
                .to("#dailog", {
                    text: "如你所见网站用了很多版权素材，很良心的在站点末尾做了感谢与声明。",
                })

                .to("#dailog", { text: "" })
                .to("#dailog", { text: "", fontSize: isMobile ? "8vw" : "5.5vh" })
                .to("#dailog", {
                    text: "作为非盈利以梦想而凝聚的小组，显然知道版权的重要。",
                })

                .to("#dailog", { text: "" })
                .to("#dailog", { text: "", fontSize: isMobile ? "7vw" : "5.5vh" })
                .to("#dailog", { text: "为啥要我解释Fair use的事情？？？有问题Github会解决的。" })

                .to("#dailog", { text: "总之保持滚动浏览内容" })
                .to("#dailog", { text: "", fontSize: isMobile ? "10vw" : "11vh" })
                .to("#dailog", { text: "好了，我该走了......" })
                .to("#dailog", { yPercent: 0 });
        }
    );
});

onUnmounted(
    ()=>{
        ani.kill()
    }
)
</script>
