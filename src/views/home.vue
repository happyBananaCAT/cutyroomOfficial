<style scoped>
.placehoder {
    background: transparent;
    /* height: v-bind(viewControl.height()+'px'); 这里的不会计算响应*/
}
</style>

<template>
    <Gravity style="position: absolute; z-index: -1;" :width="viewControl.width" :height="viewControl.height()"
        :fov="viewControl.fov()" :distance="viewControl.distance()" />
    <div id="gsap-content">
        <div class="placehoder" :style="{ 'height': viewControl.height() + 'px' }"></div>
    </div>
</template>

<script setup lang="ts">
// import type { Props } from '@/components/Gravity.vue';
import { onMounted, reactive } from 'vue';

const viewControl = reactive({
    height: (): number => {
        // if (innerHeight < innerWidth) {
        //     return innerHeight + fontSize * 3
        // }
        return innerHeight
    },
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
    }
})
</script>