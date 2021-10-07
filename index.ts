import chalk from 'chalk';
import figlet from 'figlet';
import { Direction, Slam } from './slam';
import { ReadLine, createInterface } from 'readline';
i'
const readline: ReadLine = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

const car = new Slam(0, 6, 0, 6);

console.log(
    chalk.blue(figlet.textSync('SLAM CLI', { horizontalLayout: 'full' }))
);

const ask = () =>
    readline.question(`>> Enter Command\n`, (command) => {
        const userArgs = command
            .split(' ')
            .filter((arg) => arg)
            .map((arg) => arg.toLowerCase());
        if (car.setup) {
            switch (userArgs[0]) {
                case 'place':
                    userArgs[1];
                    car.place(
                        userArgs[1],
                        userArgs[2],
                        userArgs[3] as Direction
                    );
                    break;
                case 'report':
                    car.report();
                    break;
                case 'move':
                    car.move();
                    break;
                case 'right':
                    car.right();
                    break;
                case 'left':
                    car.left();
                    break;
                default:
                    console.log(`'${userArgs[0]}' is not a known command`);
                    break;
            }
        } else {
            if (userArgs[0] !== 'place') {
                console.log('first command must be place');
                return;
            }
            car.place(userArgs[1], userArgs[2], userArgs[3] as Direction);
        }
        ask();
    });
ask();
