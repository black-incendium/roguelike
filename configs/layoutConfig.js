export const layoutConfig = {

    gameBackground: {

        type: 'sprite',
        assets: ['gameBg'],
        alpha: 1
    },

    mapContainer:{

        x: 1, y: 1,
        rotation: 0,

        mask: {
            x: 20, y: 0, 
            width: 512, height: 512
        },

        childrenCommonProperties: {

            type: 'sprite',
            assets: ['testTile2'],
            scale: 8,
            rotation: -10
        },

        children: {

            tile0x0: {x: 0, y: 0},
            tile0x1: {x: 306, y: 0},
            tile1x0: {x: 0, y: 256},
            tile1x1: {x: 256, y: 256},
        }
    },

    fishContainer: {

        x: 1000, y:800,
        scaleX: 1, scaleY: 1,
        alpha: 0.5,
        rotation: 0,

        childrenCommonProperties: {
            
            type: 'sprite',
            assets: ['highRes'],
        },

        children: {

            fishInATank1: {
                x: 0, y: 0,

                childrenCommonProperties: {

                    type: 'sprite',
                    assets: ['testTile2'],
                    scale: 4,
                    rotation: 30,
                },
        
                children: {
        
                    tile0x0: {x: 0, y: 0},
                    tile0x1: {x: 256, y: 0},
                    tile1x0: {x: 0, y: 256},
                    tile1x1: {x: 256, y: 256},
                }
            },
            fishInATank2: {x: 500, y: 0,},
            fishInATank3: {x: 0, y: 500,},
            fishInATank4: {x: 500, y: 500,},
        }
    }
}