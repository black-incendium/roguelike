import { glass } from './glass/main.js'
import { assetsConfig } from '../configs/assetsConfig.js';
import { gameConfig } from '../configs/gameConfig.js';
import { layoutConfig } from '../configs/layoutConfig.js';

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl2', {stencil: true});
glass.initialize({
    canvas,
    gl,
    assetsData: assetsConfig,
    gameData: gameConfig,
    layoutData: layoutConfig
});