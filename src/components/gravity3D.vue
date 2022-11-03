<script setup lang = 'ts'>
import { onMounted, ref, reactive, type Ref, onBeforeUnmount, shallowReactive, shallowRef, onUnmounted } from 'vue';

import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
let relativeAngleBase = shallowRef({
    beta: 0,
    gamma: 0
})
let relativeAngle = shallowRef({
    beta: 0,
    gamma: 0
})

const container = ref<HTMLElement>();
let mixer;

const clock = new THREE.Clock();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
container.value?.appendChild(renderer.domElement);

const pmremGenerator = new THREE.PMREMGenerator(renderer);

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xbfe3dd);
scene.background = new THREE.Color(0, 1, 1);
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
// camera.position.set(5, 2, 8);
camera.position.set(-0.75, 1, 10);


const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('node_modules/three/examples/js/libs/draco/gltf/');

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);
function gravitySensor(ev: DeviceOrientationEvent) {
    if (relativeAngleBase.value.beta == relativeAngleBase.value.gamma && relativeAngleBase.value.beta == 0) {
        relativeAngleBase.value.beta = THREE.MathUtils.clamp(ev.beta, -90, 90) * (Math.PI / 180)
        relativeAngleBase.value.gamma = THREE.MathUtils.clamp(ev.gamma, -90, 90) * (Math.PI / 180)
    }
    relativeAngle.value.beta = THREE.MathUtils.clamp(ev.beta, -90, 90) * (Math.PI / 180) - relativeAngleBase.value.beta
    relativeAngle.value.gamma = THREE.MathUtils.clamp(ev.gamma, -90, 90) * (Math.PI / 180) - relativeAngleBase.value.gamma
}
onMounted(() => {
    loader.load('src/assets/models/gltf/LittlestTokyo.glb', function (gltf) {

        const model = gltf.scene;
        // model.position.set(1, 1, 0);
        model.position.set(0, 0.5, 0)
        model.scale.set(0.01, 0.01, 0.01);
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();

        animate();

    }, undefined, function (e) {

        console.error(e);

    });


    window.onresize = function () {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    };


    function animate() {

        requestAnimationFrame(animate);

        const delta = clock.getDelta();

        mixer.update(delta);
        scene.rotation.set(relativeAngle.value.beta, relativeAngle.value.gamma, 0) //up left roll
        renderer.render(scene, camera);

    }
    window.addEventListener('deviceorientation', gravitySensor, { passive: true })
})
onUnmounted(() => {
    window.removeEventListener('deviceorientation', gravitySensor)
})
</script>
<template>
    <p>baseBeta: {{ relativeAngleBase.beta }}</p>
    <p>baseGamma: {{ relativeAngleBase.gamma }}</p>
    <p>Beta: {{ relativeAngle.beta }}</p>
    <p>Gamma: {{ relativeAngle.gamma }}</p>
    <div ref="container"></div>
</template>
