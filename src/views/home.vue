<!-- 编译css -->
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
</style>

<!-- 无编译css -->
<style>

</style>

<template>
    <Gravity style="position: absolute; z-index: -1; overflow: hidden;" :width="viewControl.width"
        :height="viewControl.height" :fov="viewControl.fov()" :distance="viewControl.distance()" />
    <div id="gsap-content">
        <div id="scene1" class="scene" :style="{ 'height': viewControl.height + 'px' }">
            <typed class="layer" />
            <dannmaku class="layer" style="z-index: -1;"/>
        </div>
        <div class="scene" :style="{ 'height': viewControl.height + 'px' }"></div>
        <div class="scene" :style="{ 'height': viewControl.height + 'px' }"></div>
        <div class="scene" :style="{ 'height': viewControl.height + 'px' }"></div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { onMounted, reactive, ref, inject, h, render, createVNode, renderList } from 'vue';
import { el, mount, unmount } from "redom";
// const scroller = inject('content-scroller',null);
const s1DannmakuContainer = ref<HTMLElement>();

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

function createDom(json: { tag: string, content: string, sign?: { class?: string, id?: string } }): HTMLElement {
    let dom = document.createElement(json.tag);
    if (json.sign) {
        if (json.sign.class) {
            dom.classList.add(json.sign.class!);
        }
        if (json.sign.id) {
            dom.id = json.sign.id!;
        }
    }
    dom.textContent = json.content;
    return dom;
}

onMounted(() => {
    // let domt = createDom({
    //     tag: 'span',
    //     content: 'test',
    //     sign: { class: 'dannmaku' }
    // })
    // s1DannmakuContainer.value?.appendChild(domt)

    onresize = () => {
        viewControl.width = innerWidth
        viewControl.height = innerHeight
    }
})

// return ()=>{}
</script>