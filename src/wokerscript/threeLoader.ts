declare var self: ServiceWorkerGlobalScope;
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import {
  AnimationClip,
  CanvasTexture,
  ImageBitmapLoader,
  Object3D,
  ObjectLoader,
  Scene,
  sRGBEncoding,
  TextureLoader,
  WebGLRenderer,
} from "three";
// import * as draco from "/node_modules/three/examples/js/libs/draco/gltf/draco_decoder.js";
// self.importScripts("/node_modules/three/examples/js/libs/draco/gltf/");

onmessage = (params) => {
  const loader = new GLTFLoader();
  const dracoloader = new DRACOLoader();
  const scener = new Scene();
  const sender = new GLTFExporter();
//   dracoloader.setDecoderConfig({type:"wasm"});
//   dracoloader.setCrossOrigin("../../node_modules/");
// dracoloader.setDecoderConfig({ type: "js" });
dracoloader.setDecoderPath("/node_modules/three/examples/js/libs/draco/gltf/");
  loader.setDRACOLoader(dracoloader);
  loader
    .loadAsync("/src/assets/models/gltf/LittlestTokyo.glb")
    .then(function (gltf) {
      const model = gltf.scene;
      //   model.traverse(function (obj) {
      //     if (obj.isObject3D) {
      //         obj.children
      //     }
      //   })
      scener.add(gltf.scene);
      //   sender.parse(
      //     scener,
      //     function (out) {
      //       postMessage({
      //         gltf: out,
      //       }),
      //         [out];
      //     },
      //     function (e) {
      //       console.log(e);
      //     },
      //     {
      //       onlyVisible: false,
      //       animations: gltf.animations,
      //     }
      //   );
    })
    .catch(function (e) {
      console.error(e);
    });
};
export {};
