export const layoutConfig = {

    fish1: {

        type: 'sprite',
        assets: ['highRes'],
        x: 1000, y: 1000,
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

            fish3: {

                type: 'sprite',
                assets: ['highRes'],
                x: 400, y: 400,
                scale:0.25,
                rotation: 0,
            },
        }
    },
}