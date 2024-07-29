import { WebGame } from "./multiplayer/WebGame";
import '@babylonjs/loaders/glTF/2.0/glTFLoader';
import '@babylonjs/loaders/OBJ/index';
import { TerrainDemo } from "./demos/TerrainDemo";
import { GameManager } from "./util/GameManager";
import XRDemo from "./demos/VRDemo";
import ARDemo from "./demos/ARDemo";

window.addEventListener('DOMContentLoaded', async () => {
    new GameManager('renderCanvas', new ARDemo()).start();
});
