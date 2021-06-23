import * as THREE from "three"

export const graveGroup = new THREE.Group()
export const graveMaterial = new THREE.MeshStandardMaterial({color: "grey"})
for(let i = 0; i < 100; i++) {
  const radian = Math.random() * Math.PI * 2;
  const radius = 6 + Math.random() * 18
  const x = Math.sin(radian) * radius
  const z = Math.cos(radian) * radius
  // console.log(x, z)
  const grave = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1.2, 0.35), graveMaterial)
  grave.castShadow = true;
  grave.rotation.z = (Math.random() - 0.5 ) / 4
  grave.rotation.y =  0.8 * (Math.random() ) 
  grave.position.set(x, 0.4, z)
  graveGroup.add(grave)
}

