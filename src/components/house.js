import * as THREE from "three"
import { brickwall, doorTexture } from "./loadTexture";

// house group
const house = new THREE.Group()


// wall
const wall = new THREE.Mesh(new THREE.BoxBufferGeometry(6, 3, 6), new THREE.MeshStandardMaterial({
  map: brickwall.color,
  normalMap: brickwall.normal,
  roughnessMap: brickwall.roughness,
  aoMap: brickwall.ao
}))
wall.position.set(0,1.5, 0)

const uvArray = wall.geometry.attributes.uv.array;
wall.geometry.setAttribute('uv2', new THREE.BufferAttribute(uvArray, 2))
wall.castShadow = true;

// door 
const door = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2, 50, 50), new THREE.MeshStandardMaterial({
  map: doorTexture.color,
  displacementMap: doorTexture.height,
  metalnessMap: doorTexture.metalness,
  normalMap: doorTexture.normal,
  aoMap: doorTexture.ao,
  alphaMap: doorTexture.alpha,
  transparent: true,
}))

door.position.z = 2.97;
door.position.y = 0.9;
door.material.displacementScale = 0.15;
door.material.metalness = 0.2;
const doorUV = door.geometry.attributes.uv.array;
door.geometry.setAttribute('uv2', new THREE.BufferAttribute(doorUV, '2'))

// roof
export const roof = new THREE.Mesh(new THREE.ConeBufferGeometry(5, 2, 4, 20), new THREE.MeshStandardMaterial({color: 0x735b45}))
roof.rotation.y = Math.PI / 4
roof.position.y = 4

//pointLight
const housePointLight = new THREE.PointLight(0xeb235c, 2, 15, 2)
housePointLight.shadow.mapSize.x = 256
housePointLight.shadow.mapSize.y = 256
housePointLight.shadow.near = 0.1;
housePointLight.shadow.far = 7;

housePointLight.castShadow = true;

housePointLight.position.set(0, 3, 3.3)
// bushes
export const bushMaterial = new THREE.MeshPhongMaterial({color: 0x389338})
export const bushCreator = ([x, y, z], size) => {
  const bush = new THREE.Mesh(new THREE.SphereBufferGeometry(size, 30, 30), bushMaterial)
  bush.position.set(x, y, z)
  return bush;
} 

const bush1 = bushCreator([1.8, 0.3, 3.2], 0.5);
const bush2 = bushCreator([2.5, 0, 3], 0.3)

const bush3 = bushCreator([-1.8, 0.3, 3.2], 0.5);
const bush4 = bushCreator([-2, 0, 3.6], 0.2)

const bush5 = bushCreator([-3.2, 0.3, 1.8], 0.5);
const bush6 = bushCreator([-3.6, 0, 2], 0.2)

const bush7 = bushCreator([-3.2, 0.3, -2.8], 0.7);
const bush8 = bushCreator([-3.6, 0, 2], 0.2)
house.add(wall, door, roof, bush1, bush2, bush3, bush4, bush5, bush6, bush7, bush8, housePointLight)
export {house}