export type Direction = 'east' | 'south' | 'north' | 'west';
interface DirectionConfig {
    right: Direction;
    left: Direction;
    dx: number;
    dy: number;
}
interface DirectionMap {
    east: DirectionConfig;
    south: DirectionConfig;
    west: DirectionConfig;
    north: DirectionConfig;
}
const directionConfig: DirectionMap = {
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
};

export class Slam {
    minX;
    maxX;
    minY;
    maxY;
    x: number = 0;
    y: number = 0;
    direction: Direction = 'north';
    setup: boolean = false;

    constructor(minX: number, maxX: number, minY: number, maxY: number) {
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
    }

    place = (x: string, y: string, direction?: Direction) => {
        const intX = parseInt(x);
        const intY = parseInt(y);

        if (isNaN(intX) || isNaN(intY)) {
            console.log('the co-ordinates you entered were not valid');
            return;
        }
        if (!this.isPositionValid(intX, intY)) {
            console.log('invalid location');
            return;
        }
        if (!this.setup && !direction) {
            console.log('initial place command must have direction argument');
            return;
        }
        this.x = intX;
        this.y = intY;
        this.direction = direction || this.direction;
        this.setup = true;
    };

    move = () => {
        const directionData = directionConfig[this.direction];
        const newX = directionData.dx + this.x;
        const newY = directionData.dy + this.y;
        if (!this.isPositionValid(newX, newY)) {
            console.log('invalid movement');
            return;
        }
        this.x = newX;
        this.y = newY;
    };

    report = () => {
        console.log(`${this.x},${this.y},${this.direction}`);
    };

    left = () => {
        const directionData = directionConfig[this.direction];
        this.direction = directionData.left;
    };

    right = () => {
        const directionData = directionConfig[this.direction];
        this.direction = directionData.right;
    };

    isPositionValid = (x: number, y: number) => {
        if (
            x >= this.minX &&
            x <= this.maxX &&
            y >= this.minY &&
            y <= this.maxY
        ) {
            return true;
        }
        return false;
    };
}
