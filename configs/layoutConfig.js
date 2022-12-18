export const layoutConfig = {

    gameBackground: {

        type: 'sprite',
        assets: ['gameBg']
    },

    fish1: {

        type: 'sprite',
        assets: ['highRes'],

        children: {

            fish2: {

                type: 'sprite',
                assets: ['highRes'],
                x: 100, y: 100,
                scale:0.5,
            },
        }
    },

    fish3: {

        type: 'sprite',
        assets: ['highRes'],
        x: 2048-474, y: 1152-474,
    },

    fishContainer: {

        x: 500, y:500,
        scaleX: 1, scaleY:0.5,

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