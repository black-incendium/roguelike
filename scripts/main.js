import { glass } from './glass/main.js'
import { assetsConfig } from '../configs/assetsConfig.js';
import { gameConfig } from '../configs/gameConfig.js';
import { layoutConfig } from '../configs/layoutConfig.js';

glass.initialize({
    assetsData: assetsConfig,
    gameData: gameConfig,
    layoutData: layoutConfig
});

// gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
