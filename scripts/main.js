import { glass } from './glass/dist/main.js'
import { assetsConfig } from '../configs/assetsConfig.js';
import { gameConfig } from '../configs/gameConfig.js';
import { layoutConfig } from '../configs/layoutConfig.js';
import { eventsManager } from './glass/dist/managers/eventsManager.js'
import { rendererEventsData } from './glass/dist/eventsData/rendererEventsData.js';
import { progressorsManager } from './glass/dist/managers/progressorsManager.js';
import { componentsManager } from './glass/dist/managers/componentsManager.js';

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl2', {stencil: true});

eventsManager.addEventListener(rendererEventsData.renderingStarted.name,  () => {

    startMainFlow();

}, {oneTime: true});

glass.initialize({
    canvas,
    gl,
    assetsData: assetsConfig,
    gameData: gameConfig,
    layoutData: layoutConfig
});

function startMainFlow() {

    console.log(1)
    let progressorTest = progressorsManager.getNewProgressor({
        startValue: 0,
        targetValue: 3600,
        duration: 100000,
        updateCallback: (currentValue) => {
            componentsManager.getComponentById('tile0x1').rotation = currentValue;
            componentsManager.getComponentById('tile1x1').rotation = currentValue;
            componentsManager.getComponentById('tile1x0').rotation = currentValue;
            componentsManager.getComponentById('tile0x0').rotation = currentValue;
        }
    });

    progressorTest.start();
}