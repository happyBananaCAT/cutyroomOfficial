<!-- 编译css -->
<style scoped>
.scene {
    overflow: hidden;
    background: transparent;
    position: relative;
    /* height: v-bind(viewControl.height()+'px'); 这里的不会计算响应?*/
}

.layer {
    position: absolute;
    height: 100%;
    width: 100%;
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
            <typed class="layer" style="z-index:1" />
            <dannmaku class="layer" />
            <!-- 弹幕组件上class虽然正常但是却会warn？ -->
        </div>
        <div id="scene2" class="scene" :style="{ 'height': viewControl.height * 5 + 'px' }">
            <s2bg class="layer" />
            <dailog />
            <!-- <midiPlayer/> -->
        </div>
        <div class="scene" :style="{ 'height': viewControl.height + 'px' }"></div>
        <div class="scene" :style="{ 'height': viewControl.height + 'px' }"></div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { onMounted, reactive, ref, inject, h, render, createVNode, renderList } from 'vue';

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

    onresize = () => {
        viewControl.width = innerWidth
        viewControl.height = innerHeight
    }
})

// return ()=>{}
</script>