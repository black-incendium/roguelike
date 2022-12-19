export const layoutConfig = {

    gameBackground: {

        type: 'sprite',
        assets: ['gameBg'],
        alpha: 1
    },

    mapContainer:{

        x: 1, y: 1,
        scale: 3,

        childrenCommonProperties: {

            type: 'sprite',
            assets: ['tileTest'],
        },

        children: {

            tile0x0: {x: 0, y: 0},
            tile0x1: {x: 32, y: 0},
            tile1x0: {x: 0, y: 32},
            tile1x1: {x: 32, y: 32},
        }
    },

    fishContainer: {

        x: 1500, y:800,
        scaleX: 0.5, scaleY:0.25,
        alpha: 0.5,

        children: {

            fishInATank1: {

                type: 'sprite',
                assets: ['highRes'],
                x: 0, y: 0,
            },

            fishInATank2: {

                type: 'sprite',
                assets: ['highRes'],
                x: 500, y: 0,
            },

            fishInATank3: {

                type: 'sprite',
                assets: ['highRes'],
                x: 0, y: 500,
            },

            fishInATank4: {

                type: 'sprite',
                assets: ['highRes'],
                x: 500, y: 500,
            },
        }
    }
}