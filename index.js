import welcome from './modules/welcome/welcome.js';
import rl from './modules/readLine/readLine.js';
import { COMMAND, ERROR } from './utils/constants.js';
import listOfFiles from './modules/fileSystem/listOfFiles.js';
import changeDirectory from './modules/fileSystem/changeDirectory.js';
import readFile from './modules/fileSystem/readFile.js';
import createFile from './modules/fileSystem/createFile.js';
import osController from './modules/operationSystem/osController.js';
import renameFile from './modules/fileSystem/renameFile.js';
import deleteFile from './modules/fileSystem/deleteFile.js';

const initApp = async () => {
  welcome();

  rl.on('line', async (input) => {
    const command = input.trim().split(' ', 1)[0];

    const commandArgs =
      input &&
      input
        .match(/(?:[^\s"]+|"[^"]*")+/g)
        .map((arg) => arg.replace(/"/g, ''))
        .slice(1);

    if (!Object.values(COMMAND).includes(command) && command !== '') {
      console.log(ERROR.invalidCommand);
    }

    switch (command) {
      case COMMAND.exit:
        rl.close();
        break;
      case COMMAND.ls:
        await listOfFiles();
        break;
      case COMMAND.up:
        process.chdir('..');
        break;
      case COMMAND.cd:
        await changeDirectory(commandArgs);
        break;
      case COMMAND.cat:
        await readFile(commandArgs);
        break;
      case COMMAND.add:
        await createFile(commandArgs);
        break;
      case COMMAND.os:
        await osController(commandArgs);
        break;
      case COMMAND.rn:
        await renameFile(commandArgs);
        break;
      case COMMAND.rm:
        await deleteFile(commandArgs);
        break;
      default:
        break;
    }

    console.log(`You are currently in ${process.cwd()}`);
  });
};

initApp();
