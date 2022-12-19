export const layoutConfig = {

    gameBackground: {

        type: 'sprite',
        assets: ['gameBg'],
        alpha: 1
    },

    mapContainer:{

        x: 1, y: 1,

        childrenCommonProperties: {

            type: 'sprite',
            assets: ['tileTest'],
            scale: 3,
        },

        children: {

            tile0x0: {x: 0, y: 0},
            tile0x1: {x: 96, y: 0},
            tile1x0: {x: 0, y: 96},
            tile1x1: {x: 96, y: 96},
        }
    },

    fishContainer: {

        x: 1500, y:800,
        scaleX: 0.5, scaleY:0.25,
        alpha: 0.5,

        childrenCommonProperties: {
            
            type: 'sprite',
            assets: ['highRes'],
        },

        children: {

            fishInATank1: {x: 0, y: 0,},
            fishInATank2: {x: 500, y: 0,},
            fishInATank3: {x: 0, y: 500,},
            fishInATank4: {x: 500, y: 500,},
        }
    }
}