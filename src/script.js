import "./style.css"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import {grassPlane} from "./components/grass"
import {house} from "./components/house"
import {graveGroup} from "./components/grave"
import {ghost1, ghost2, ghost3} from "./components/ghost"
import "./gui"
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

let scene, camera, renderer, controls, directionalLight
(function init() {

  // scene
  scene = new THREE.Scene()
  
  // camera
  camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 1000)
  camera.position.set(0, 5, 5);
  
  // renderer
  renderer = new THREE.WebGLRenderer()
  document.body.appendChild(renderer.domElement)
  renderer.setSize(sizes.width, sizes.height)
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  // helpers
  const axesHelper = new THREE.AxesHelper(2)
  const gridHelper = new THREE.GridHelper(100, 100)
  
  // box

  // orbit controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)


  
  scene.fog = new THREE.Fog(0x00000c, 0.1, 40)
  scene.add(camera, axesHelper, ambientLight)
  renderer.render(scene, camera)
})()



scene.add(grassPlane)
scene.add(house)
scene.add(graveGroup)
scene.add(ghost1, ghost2, ghost3)


const clock = new THREE.Clock()
function animate() {
  const elapsedTime = clock.getElapsedTime()
  requestAnimationFrame(animate)
  controls.update()
  
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)

  ghost1.position.x = (Math.sin(elapsedTime * 1.5) ) * 10;
  ghost1.position.z = (Math.cos(elapsedTime) ) * 10;
  ghost1.position.y = Math.cos(elapsedTime * 3) * 4;
  
  ghost2.position.x = (-Math.sin(elapsedTime) ) * 10;
  ghost2.position.z = (-Math.cos(elapsedTime) ) * 10;
  ghost2.position.y = Math.cos(elapsedTime * 3) * 2 +  Math.cos(elapsedTime * 3) * 2;
  
  ghost3.position.x = (Math.sin(elapsedTime * 1.5) ) * 10;
  ghost3.position.z = (Math.cos(elapsedTime) ) * 10;
  ghost3.position.y = Math.cos(elapsedTime * 3) * 4;
  renderer.render(scene, camera)
}
animate()


