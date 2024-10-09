import welcome from './modules/welcome/welcome.js';
import rl from './modules/readLine/readLine.js';
import { COMMAND, ERROR } from './utils/constants.js';
import listOfFiles from './modules/fileSystem/listOfFiles.js';
import changeDirectory from './modules/fileSystem/changeDirectory.js';
import readFile from './modules/fileSystem/readFile.js';
import createFile from './modules/fileSystem/createFile.js';
import osController from './modules/operationSystem/osController.js';

const initApp = async () => {
  welcome();

  rl.on('line', async (input) => {
    const commandToArr = input.trim().split(' ');

    const command = commandToArr[0];
    const commandArgs = commandToArr.slice(1);

    if (!COMMAND[command] && command !== '') console.log(ERROR.invalidCommand);

    if (command === COMMAND.exit) rl.close();

    if (command === COMMAND.ls) await listOfFiles();

    if (command === COMMAND.up) process.chdir('..');

    if (command === COMMAND.cd) await changeDirectory(commandArgs);

    if (command === COMMAND.cat) await readFile(commandArgs);

    if (command === COMMAND.add) await createFile(commandArgs);

    if (command === COMMAND.os) await osController(commandArgs);

    console.log(`You are currently in ${process.cwd()}`);
  });
};

initApp();
