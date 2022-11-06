declare var self: ServiceWorkerGlobalScope;
// import modelPath from
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import THREE, {
  AnimationClip,
  AnimationMixer,
  CanvasTexture,
  Clock,
  ImageBitmapLoader,
  Object3D,
  ObjectLoader,
  Scene,
  sRGBEncoding,
  TextureLoader,
  WebGLRenderer,
} from "three";
const decoderUrl = new URL("/node_modules/three/examples/js/libs/draco/gltf/draco_decoder.js?url")
const modelUrl = new URL("/src/assets/models/gltf/LittlestTokyo.glb")
let mixer:AnimationMixer;
const clock = new Clock();
const loader = new GLTFLoader();
const dracoloader = new DRACOLoader();
const scener = new Scene();
addEventListener('message',(e)=>{
  console.log(e.data)
  postMessage('pong')
})
export { };
