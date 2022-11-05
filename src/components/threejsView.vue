<template>
    <div ref="container">{{inputAngle}}</div>
</template>

<script setup lang="ts">
import { isReactive, markRaw, onMounted, onUnmounted, reactive, ref, shallowReactive, toRaw } from 'vue';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// const props = defineProps<{inputAngle}>()
const container = ref<HTMLElement>().value;
const threeObjs = markRaw(toRaw(shallowReactive({
    clock: new THREE.Clock(),
    renderer: new THREE.WebGLRenderer({ antialias: true }),
    screen: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100),
    dracoLoader: new DRACOLoader(),
    loader: new GLTFLoader()
})))
</script>