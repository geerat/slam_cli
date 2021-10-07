const x = {
    tableConfig: {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0,
    },
    directionConfig: {
        east: {
            right: 'south',
            left: 'north',
            dx: 1,
            dy: 0,
        },
        south: {
            right: 'west',
            left: 'east',
            dx: 0,
            dy: -1,
        },
        west: {
            right: 'north',
            left: 'south',
            dx: 0,
            dy: 1,
        },
        north: {
            right: 'east',
            left: 'west',
            dx: -1,
            dy: 0,
        },
    },
};
