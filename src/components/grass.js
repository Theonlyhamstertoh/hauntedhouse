import * as THREE from "three";
import {grassColor, grassAO, grassRoughness, grassNormal} from "./loadTexture"
export const grassPlane = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(50, 50, 100, 100),
  new THREE.MeshStandardMaterial({
    map: grassColor, 
    normalMap: grassNormal,
    roughnessMap: grassRoughness,
    aoMap: grassAO,

  })
)
const uvArray =grassPlane.geometry.attributes.uv.array;
grassPlane.geometry.setAttribute("uv2", new THREE.BufferAttribute(uvArray, 2))
grassPlane.receiveShadow = true;
grassPlane.rotation.x = -Math.PI * 0.5