import * as THREE from "three"

export const ghost1 = new THREE.PointLight(0x00ff00, 2, 10, 2)
ghost1.castShadow = true;
export const ghost2 = new THREE.PointLight(0x0000ff, 3, 10, 2)
ghost2.castShadow = true;
export const ghost3 = new THREE.PointLight(0x0f0f00, 2, 10, 2)


ghost1.shadow.mapSize.x = 256
ghost1.shadow.mapSize.y = 256
ghost1.shadow.near = 0.1;
ghost1.shadow.far = 7;

ghost2.shadow.mapSize.x = 256
ghost2.shadow.mapSize.y = 256
ghost2.shadow.near = 0.1;
ghost2.shadow.far = 7;
ghost3.shadow.mapSize.x = 256
ghost3.shadow.mapSize.y = 256
ghost3.shadow.near = 0.1;
ghost3.shadow.far = 7;
