export const layoutConfig = [

    {

        id: 'gameBackground',
        type: 'sprite',
        assets: ['gameBg'],
        alpha: 1
    },

    {

        id: 'mapContainer',
        type: 'container',
        x: 100, y: 1,
        rotation: 0,

        mask: {
            x: -100, y: 0, 
            width: 600, height: 612
        },

        childrenCommonProperties: {

            type: 'sprite',
            assets: ['testTile2'],
            scale: 8,
            rotation: -10
        },

        children: [

            {id: 'tile0x0', type: 'sprite', assets: ['spritesheetTile1'], scale: 8, x: 0, y: 0},
            {id: 'tile0x1', type: 'sprite', assets: ['spritesheetTile2'], scale: 8, x: 406, y: 0, rotation: 0},
            {id: 'tile1x0', type: 'sprite', assets: ['spritesheetTile3'], scale: 8, x: 0, y: 256},
            {id: 'tile1x1', type: 'sprite', assets: ['spritesheetTile4'], scale: 8, x: 256, y: 256, pivotPoint:  {x: 16, y: 16}},
        ]
    },

    {
        id: 'fishContainer',
        type: 'container',
        x: 1000, y:800,
        scaleX: 1, scaleY: 1,
        alpha: 1,
        rotation: 90,

        childrenCommonProperties: {
            
            type: 'sprite',
            assets: ['highRes'],
        },

        children: [

            {
                id: 'fishInATank1',
                type: 'sprite',
                assets: ['highRes'],
                x: 0, y: 0,

                childrenCommonProperties: {

                    type: 'sprite',
                    assets: ['testTile2'],
                    scale: 4,
                    rotation: 30,
                },
        
                children: [
        
                    {id: 'secondTile0x0', type: 'sprite', assets: ['testTile2'], x: 0, y: 0},
                    {id: 'secondTile0x1', type: 'sprite', assets: ['testTile2'], x: 256, y: 0},
                    {id: 'secondTile1x0', type: 'sprite', assets: ['testTile2'], x: 0, y: 256},
                    {id: 'secondTile1x1', type: 'sprite', assets: ['testTile2'], x: 256, y: 256},
                ]
            },
            {id: 'fishInATank2', assets: ['highRes'], type: 'sprite', x: 500, y: 0,},
            {id: 'fishInATank3', assets: ['highRes'], type: 'sprite', x: 0, y: 500,},
            {id: 'fishInATank4', assets: ['highRes'], type: 'sprite', x: 500, y: 500,},
        ]
    }
]