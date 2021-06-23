import * as dat from "dat.gui"
import {roof, bushMaterial} from "./components/house"
import {graveMaterial} from "./components/grave"
const gui = new dat.GUI()
const debugObject = {
  color: 0x735b45,
  bushColor: 0x389338,
  graveColor: 0xcccccc,
}
gui.addColor(debugObject, "color").onChange(() => roof.material.color.set(debugObject.color))
gui.addColor(debugObject, "bushColor").onChange(() => bushMaterial.color.set(debugObject.bushColor))
gui.addColor(debugObject, "graveColor").onChange(() => graveMaterial.color.set(debugObject.graveColor))
