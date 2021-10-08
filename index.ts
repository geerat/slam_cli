import chalk from 'chalk';
import figlet from 'figlet';
import { Slam } from './Classes/slam';
import { configuration } from './config';
import { Cli } from './Classes/cli';

const car = new Slam(configuration.table, configuration.map);
const cli = new Cli(car);

console.log(
    chalk.blue(figlet.textSync('SLAM CLI', { horizontalLayout: 'full' }))
);

cli.start();
