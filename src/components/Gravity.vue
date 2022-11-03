<script setup lang = 'ts'>
import { isReactive, markRaw, onMounted, onUnmounted, reactive, ref, shallowReactive, toRaw } from 'vue';
import { MathUtils } from 'three';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const relativeAngleBase = markRaw({
    beta: 0,
    gamma: 0
})
const remainAngle = markRaw({
    beta: 0,
    gamma: 0
})
const relativeAngle = markRaw({
    beta: 0,
    gamma: 0
})
const nowAngle = markRaw({
    beta: 0,
    gamma: 0
})
const container = ref<HTMLElement>().value;
const threeObjs = markRaw(toRaw(shallowReactive({
    clock: new THREE.Clock(),
    renderer: new THREE.WebGLRenderer({ antialias: true }),
    screen: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100),
    dracoLoader: new DRACOLoader(),
    loader: new GLTFLoader()
})))





onMounted(() => {
    window.addEventListener('deviceorientation', gravitySensor, { passive: true })
})
onUnmounted(() => {
    window.removeEventListener('deviceorientation', gravitySensor)
})
async function gravitySensor(ev: DeviceOrientationEvent) {
    let radius = (Math.PI / 2);
    nowAngle.beta = await MathUtils.smootherstep(ev.beta, -90, 90)
    nowAngle.gamma = await MathUtils.smootherstep(ev.gamma, -90, 90)
    // 防干扰
    if (nowAngle.beta > 0.99 || nowAngle.beta < 0.01) {
        nowAngle.gamma = -1 * nowAngle.gamma; //beta到临界值，限制gamma以防止干扰
    }
    if (nowAngle.gamma > 0.99 || nowAngle.gamma < 0.01) {
        nowAngle.beta = -1 * nowAngle.beta;  //gamma，防止beta
    }

    // 单轴操作
    if (nowAngle.gamma > 0) {
        if (relativeAngleBase.gamma == 0) {
            relativeAngleBase.gamma = await nowAngle.gamma;
        }
        remainAngle.gamma = await nowAngle.gamma;

    }
    if (nowAngle.beta > 0) {
        if (relativeAngleBase.beta == 0) {
            relativeAngleBase.beta = await nowAngle.beta;
        }
        remainAngle.beta = await nowAngle.beta
    }
    // console.log(isReactive(reactive(remainAngle)))
    // console.log("now "+isReactive(nowAngle.beta))
    // console.log("remain "+isReactive(remainAngle.beta))
}
</script>

<template>
    <p>baseBeta: {{ relativeAngleBase.beta }}</p>
    <p>baseGamma: {{ relativeAngleBase.gamma }}</p>
    <p>nowBeta: {{ nowAngle.beta }}</p>
    <p>nowGamma: {{ nowAngle.gamma }}</p>
    <p>remainBeta: {{ remainAngle.beta }}</p>
    <p>remainGamma: {{ remainAngle.gamma }}</p>
    <div ref="container"></div>
</template>