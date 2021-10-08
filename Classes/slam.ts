import { Direction, MapConfiguration, TableConfiguration } from '../types';

export class Slam {
    x: number = 0;
    y: number = 0;
    direction: Direction | undefined = undefined;

    private readonly minX;
    private readonly maxX;
    private readonly minY;
    private readonly maxY;
    private readonly mapConfig: MapConfiguration;

    constructor(tableConfig: TableConfiguration, mapConfig: MapConfiguration) {
        this.minX = tableConfig.minX;
        this.maxX = tableConfig.maxX;
        this.minY = tableConfig.minY;
        this.maxY = tableConfig.maxY;
        this.mapConfig = mapConfig;
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
        if (!this.direction && !direction) {
            console.log("initial 'place' command must have direction argument");
            return;
        }

        const validDirections = Object.keys(this.mapConfig);
        if (direction && !validDirections.includes(direction)) {
            console.log(
                `${direction} is not a valid direction, please select a value from: ${validDirections.join(
                    ', '
                )}`
            );
            return;
        }

        this.x = intX;
        this.y = intY;
        this.direction = direction || this.direction;
    };

    move = () => {
        if (!this.direction) {
            console.log(
                "you must use the 'place' command before using the 'move' command"
            );
            return;
        }
        const directionData = this.mapConfig[this.direction];
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
        if (!this.direction) {
            console.log(
                "you must use the 'place' command before using the 'report' command"
            );
            return;
        }
        console.log(`${this.x},${this.y},${this.direction.toUpperCase()}`);
    };

    left = () => {
        if (!this.direction) {
            console.log(
                "you must use the 'place' command before using the 'left' command"
            );
            return;
        }
        const directionData = this.mapConfig[this.direction];
        this.direction = directionData.left;
    };

    right = () => {
        if (!this.direction) {
            console.log(
                "you must use the 'place' command before using the 'right' command"
            );
            return;
        }
        const directionData = this.mapConfig[this.direction];
        this.direction = directionData.right;
    };

    private isPositionValid = (x: number, y: number) => {
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
