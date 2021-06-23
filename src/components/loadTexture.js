import * as THREE from "three";
const textureLoader = new THREE.TextureLoader(); 

// grass plane
export const grassColor = textureLoader.load("/textures/grass/color.jpg")
export const grassAO = textureLoader.load("/textures/grass/ambientOcclusion.jpg")
export const grassNormal = textureLoader.load("/textures/grass/normal.jpg")
export const grassRoughness = textureLoader.load("/textures/grass/roughness.jpg")

grassColor.repeat.set(8, 8)
grassNormal.repeat.set(8, 8)
grassRoughness.repeat.set(8, 8)
grassAO.repeat.set(8, 8)
grassColor.wrapS = THREE.RepeatWrapping;
grassColor.wrapT = THREE.RepeatWrapping;
grassNormal.wrapS = THREE.RepeatWrapping;
grassNormal.wrapT = THREE.RepeatWrapping;
grassRoughness.wrapS = THREE.RepeatWrapping;
grassRoughness.wrapT = THREE.RepeatWrapping;
grassAO.wrapS = THREE.RepeatWrapping;
grassAO.wrapT = THREE.RepeatWrapping;

// brick wall 
export const brickwall = {
  color:  textureLoader.load("/textures/bricks/color.jpg"),
  normal : textureLoader.load("/textures/bricks/normal.jpg"),
  roughness: textureLoader.load("/textures/bricks/roughness.jpg"),
  ao: textureLoader.load("/textures/bricks/ambientOcclusion.jpg"),
}
// brick wall 
export const doorTexture = {
  color: textureLoader.load("/textures/door/color.jpg"),
  normal: textureLoader.load("/textures/door/normal.jpg"),
  metalness: textureLoader.load("/textures/door/metalness.jpg"),
  roughness: textureLoader.load("/textures/door/roughness.jpg"),
  height: textureLoader.load("/textures/door/height.jpg"),
  ao: textureLoader.load("/textures/door/ambientOcclusion.jpg"),
  alpha: textureLoader.load("/textures/door/alpha.jpg"),
}

