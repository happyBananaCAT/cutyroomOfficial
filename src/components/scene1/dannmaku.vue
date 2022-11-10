<template>
    <span class="dannmaku">向下滑动以查看更多</span>
    <div ref="dannmaku" id="dannmaku">
        <!-- <span class="dannmaku">前面的不要玩梗</span> -->
    </div>
</template>

<style scoped>
#dannmaku {
    height: 100%;
    width: 100%;
}
</style>

<style>
.dannmaku {
    white-space: nowrap;
    position: absolute;
    writing-mode: horizontal-tb;
    /* transform: translateX('100vw'); */
    opacity: 0;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.8);
}
</style>

<script setup lang="ts">
import type { HtmlAttributes } from "csstype";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { random } from "lodash";
import { el } from "redom";
import { onMounted, ref } from 'vue';

// gsap.registerPlugin(TextPlugin);
// gsap.registerPlugin(ScrollTrigger);

const dannmaku = ref<HTMLElement>()

const DannmakuText = [
    '卧槽这波牛逼', '弹幕弹幕', '666', '弹幕护体！！',
    '晃手机模型也会动', '太神了，大神带带我', '音游否', '你是一个一个一个',
    'fps低手0-10啦', '萌屋蜜汁小憨包', '大佬带带我', '浇浇劳资',
    '酷炫', '太diăo了', '小黑子，发现你了！', '泥垢',
    'sinθ*cosθ=🌈', '还有没有位置，我也想来', '这，这是什么', '湘大争气了',
    '家里人不在，偷偷看萌屋', '🐂🍺', 'gocthca!', '紫妈永远18岁',
    '让我康康', '杰哥不要啊', '这个喵喵就是逊啦', '开玩笑我超勇的',
    '行百步者半九十', 'TO DA MOON🚀🚀', '我瞎了', '诶队友呢！队友呢？',
    'See Four', '🎉🎉', '😊', '😍',
    'C.S.N. YYDS', '湘大计网院', 'Threejs', 'gsapjs',
    '迷之微笑', 'wab lab dub dub', '这就是萌屋', '狗才做前端，我是狗汪汪汪',
    '青空青空', '萌屋好不好全靠大家抬', '做什么游戏，我只想玩', '开摆啦，明天再做',
    'jvav', '教练带我打音游', '电动车告急', '100% pure!',
    '你在读弹幕', '早上好中国, 现在我有冰激凌', '尊敬的用户您的手机已经欠费', '女装程序员，Best程序猿',
    'ETH', 'BNB', 'OSU!', 'Full Commbo',
    '在？看看你的', 'As we can', '小心别饿死', '宫崎老贼拿命来',
    '区区大树守卫', 'Come\'on cowboy', '白雪公主和七个小矮人', '魔理沙不在家，灵梦偷偷玩阴阳玉',
    'BAD APPLE!', '我不做人了JOJO！', 'Java从入门到放弃', '不买立省100%',
    '开摆就开摆，谁叫我厉害', '给我100年我也行', '你行你上', '你们玩的好花啊',
    '奇奇怪怪的弹幕', '你所热爱的就是你的生活, 陈rui你🐎什么时候……', '积极向上，好好学习', '今天你核酸了吗？',
    '1 2 ⑨', '无聊，我要看到血流成河', '喵喵拳！', '升天',
    '此生无悔入东方，来世愿生幻想乡', '内存分页', '一眼萌屋鉴定为真', '你说得对，但是原神……',
    '行为树', '纯丁真一郎', '太烧了🥵', '我永远爱',
    '巨石强森', '索尼克来咯', '小心手雷！', ''
    // ,'','','',''
    // ,'','','',''
    // ,'','','',''
    // ,'','','',''
    // ,'','','',''
    // ,'','','',''
    // ,'','','',''
    // ,'','','',''
]
const randomArray = new Uint8Array(1);

onMounted(() => {
    let dannmakuTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#dannmaku',
            toggleActions: "play pause resume reset",
        },
        defaults: {
            ease: "none"
        },
        delay: 0,
        onComplete: genDannmaku,
    })
    const initTimeline = () => {
        dannmakuTl
            .set('.dannmaku', {
                x: '100vw',
                xPercent: 100,
                y: 'random(0,90)vh',
                z: 'random(0,1)',
                scale: 1,
                color: 'random([#06ff00,#00dffc,yellow,#7dce13,white,#ff1700,orange,#8843f2,#f24a72])',
                fontSize: 'random(25,50)px',
                opacity: 1,
            })
            .to('.dannmaku', {
                duration: 'random(1,5)',
                delay: 'random(0,5)',
                x: '0vw',
                xPercent: -100,
                onComplete: () => {
                    while (dannmaku.value?.lastChild) {
                        dannmaku.value?.removeChild(dannmaku.value.lastChild);
                    }
                }
            })
    }
    function genDannmaku() {
        let doms: HTMLElement[] = [];
        for (let index = 0; index < 15; index++) {
            doms[index] = el('span', DannmakuText[crypto.getRandomValues(randomArray)[0] % DannmakuText.length])
            doms[index].classList.add('dannmaku')
            // console.log(doms[index].innerText)
            dannmaku.value?.appendChild(doms[index]);
        }
        initTimeline();
    }
})
</script>