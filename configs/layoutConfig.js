export const layoutConfig = {

    fish1: {

        type: 'sprite',
        assets: ['highRes'],
        x: 0, y: 0,
        scale:1,
        rotation: 0,

        children: {

            fish2: {

                type: 'sprite',
                assets: ['highRes'],
                x: 100, y: 100,
                scale:0.5,
                rotation: 0,
            },
        }
    },

    fish3: {

        type: 'sprite',
        assets: ['highRes'],
        x: 2048-474, y: 1152-474,
        scale:1,
        rotation: 0,
    },

    fishContainer: {

        type: 'container',
        x: 500, y:500,
        scale: 0.5,
        rotation: 0,

        children: {

            fishInATank1: {

                type: 'sprite',
                assets: ['highRes'],
                x: 0, y: 0,
                scale:1,
                rotation: 0,
            },

            fishInATank2: {

                type: 'sprite',
                assets: ['highRes'],
                x: 500, y: 0,
                scale:1,
                rotation: 0,
            },

            fishInATank3: {

                type: 'sprite',
                assets: ['highRes'],
                x: 0, y: 500,
                scale:1,
                rotation: 0,
            },

            fishInATank4: {

                type: 'sprite',
                assets: ['highRes'],
                x: 500, y: 500,
                scale:1,
                rotation: 0,
            },
        }
    }
}