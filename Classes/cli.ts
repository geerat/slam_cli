import { createInterface, ReadLine } from 'readline';
import { Slam } from './slam';
import { Direction } from '../types';

export class Cli {
    constructor(slam: Slam) {
        this.car = slam;
        this.interface = createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true,
        });
    }

    private readonly car: Slam;
    private readonly interface: ReadLine;

    start = () =>
        this.interface.question(`>> Enter Command\n`, (command) => {
            const userArgs = command
                .split(/[ ,]+/)
                .filter((arg) => arg)
                .map((arg) => arg.toLowerCase());

            switch (userArgs[0]) {
                case 'place':
                    userArgs[1];
                    this.car.place(
                        userArgs[1],
                        userArgs[2],
                        userArgs[3] as Direction
                    );
                    break;
                case 'report':
                    this.car.report();
                    break;
                case 'move':
                    this.car.move();
                    break;
                case 'right':
                    this.car.right();
                    break;
                case 'left':
                    this.car.left();
                    break;
                default:
                    console.log(`'${userArgs[0]}' is not a known command`);
                    break;
            }

            this.start();
        });
}
