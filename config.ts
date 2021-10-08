import { Configuration } from './types';

export const configuration: Configuration = {
    table: {
        minX: 0,
        maxX: 6,
        minY: 0,
        maxY: 6,
    },
    map: {
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
