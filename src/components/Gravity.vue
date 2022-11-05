<script setup lang = 'ts'>
import { defineProps, isReactive, markRaw, onMounted, onUnmounted, onUpdated, reactive, ref, shallowReactive, toRaw, withDefaults } from '@vue/runtime-core';
import { Loader, MathUtils } from 'three';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import type { VueElement } from '@vue/runtime-dom';

export interface Props {
    height: number
    width: number
    fov: number
    distance: number
}
const props = withDefaults(defineProps<Props>(), {
    fov: 40,
    distance: 10
})

const relativeAngleBase = markRaw({
    beta: 0,
    gamma: 0
})
const remainAngle = markRaw({
    beta: 0,
    gamma: 0
})
const relativeAngle = shallowReactive({
    beta: 0.5,
    gamma: 0.5
})
const nowAngle = markRaw({
    beta: 0,
    gamma: 0
})

const container = ref<VueElement>();
const threeObjs = markRaw(toRaw(shallowReactive({
    mixer: THREE.AnimationMixer.prototype,
    clock: new THREE.Clock(),
    renderer: new THREE.WebGLRenderer({ antialias: true }),
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(props.fov, props.width / props.height, 1, 100),
    dracoloader: new DRACOLoader(),
    loader: new GLTFLoader()
})))

onMounted(() => {
    // threeObjs.dracoloader.setDecoderPath("/node_modules/three/examples/js/libs/draco/gltf/");
    // threeObjs.loader.setDRACOLoader(threeObjs.dracoloader)
    // const loderWoker = new Worker("/src/wokerscript/threeLoader.ts", { type: 'module' });
    // loderWoker.addEventListener("message", ({ data }) => {
    //     threeObjs.gltfLoader.parse(data.out, '', (obj) => {
    //         const model = obj.scene;
    //         const animation = obj.animations
    //         model.position.set(0, 0, 0)
    //         model.scale.set(0.01, 0.01, 0.01);
    //         threeObjs.scene.add(model);

    //         threeObjs.mixer = new THREE.AnimationMixer(model);
    //         threeObjs.mixer.clipAction(animation[0]).play();

    //         animate();
    //     })
    // });
    threeObjs.renderer.setPixelRatio(window.devicePixelRatio);
    threeObjs.renderer.setSize(props.width, props.height);
    threeObjs.renderer.outputEncoding = THREE.sRGBEncoding;
    container.value?.appendChild(threeObjs.renderer.domElement);
    const pmremGenerator = new THREE.PMREMGenerator(threeObjs.renderer);
    threeObjs.scene.background = new THREE.Color(0xbfe3dd);
    threeObjs.scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    threeObjs.camera.position.set(-0.75, -0.25, props.distance);
    // loderWoker.postMessage("1");
    threeObjs.dracoloader.setDecoderPath('/node_modules/three/examples/js/libs/draco/gltf/');
    threeObjs.loader.setDRACOLoader(threeObjs.dracoloader);
    threeObjs.renderer.render(threeObjs.scene, threeObjs.camera);
    threeObjs.loader.loadAsync('/src/assets/models/gltf/LittlestTokyo.glb').then(
        function (gltf) {

            const model = gltf.scene;
            model.position.set(0, 0, 0)
            model.scale.set(0.01, 0.01, 0.01);
            threeObjs.scene.add(model);

            threeObjs.mixer = new THREE.AnimationMixer(model);
            threeObjs.mixer.clipAction(gltf.animations[0]).play();

            animate();

        }).catch(function (e) {

            console.error(e);

        })

    function animate() {
        if (threeObjs.scene.visible) {
            requestAnimationFrame(animate);

            const delta = threeObjs.clock.getDelta();
            threeObjs.scene.rotation.set(relativeAngle.beta, relativeAngle.gamma, 0)
            threeObjs.mixer.update(delta);
            threeObjs.renderer.render(threeObjs.scene, threeObjs.camera);
        }
        // container.value!.style.backgroundImage = 'url('+threeObjs.renderer.domElement.toDataURL()+')';
    }
    window.addEventListener('deviceorientation', gravitySensor, { passive: true })
})
onUnmounted(() => {
    //清理防止重复渲染   
    threeObjs.camera.clear();
    threeObjs.scene.clear();
    threeObjs.scene.visible = false;
    threeObjs.renderer.dispose();
    // console.log(threeObjs.renderer.info)
    if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', gravitySensor)
    }
})
onUpdated(() => {
    threeObjs.camera.aspect = props.width / props.height;
    threeObjs.camera.fov = props.fov;
    threeObjs.camera.position.setZ(props.distance);
    threeObjs.camera.updateProjectionMatrix();
    threeObjs.renderer.setSize(props.width, props.height);
})
async function gravitySensor(ev: DeviceOrientationEvent) {
    let radius = (Math.PI / 2);
    nowAngle.beta = await MathUtils.smootherstep(ev.beta!, -90, 90)
    nowAngle.gamma = await MathUtils.smootherstep(ev.gamma!, -90, 90)
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
        relativeAngle.gamma = nowAngle.gamma - relativeAngleBase.gamma
    }
    if (nowAngle.beta > 0) {
        if (relativeAngleBase.beta == 0) {
            relativeAngleBase.beta = await nowAngle.beta;
        }
        remainAngle.beta = await nowAngle.beta
        relativeAngle.beta = nowAngle.beta - relativeAngleBase.beta
    }
    // console.log(isReactive(reactive(remainAngle)))
    // console.log("now "+isReactive(nowAngle.beta))
    // console.log("remain "+isReactive(remainAngle.beta))
}
//     <p>baseBeta: {{ relativeAngleBase.beta }}</p>
//     <p>baseGamma: {{ relativeAngleBase.gamma }}</p>
//     <p>relativeBeta: {{ relativeAngle.beta }}</p>
//     <p>relativeGamma: {{ relativeAngle.gamma }}</p> -->
//     <p>Beta: {{ nowAngle.beta }}</p>
//     <p>Gamma: {{ nowAngle.gamma }}</p> -->
//     <div id="shower"></div> -->
</script>

<template>
    <div ref="container" id="container"></div>
</template>

<style scoped>
#container {
    /* background: element(); */
    height: v-bind($props.height+'px');
    width: v-bind($props.width+'px');
}
</style>