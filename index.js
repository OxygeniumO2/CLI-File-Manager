import welcome from './modules/welcome/welcome.js';
import rl from './modules/readLine/readLine.js';
import { COMMAND, ERROR, COMMAND_FS } from './utils/constants.js';
import osController from './modules/operationSystem/osController.js';
import fsController from './modules/fileSystem/fsController.js';
import os from 'node:os';
import { cyanText, redText } from './utils/consoleTextHelper.js';

const initApp = async () => {
  welcome();

  const dirMsg = `You are currently in ${cyanText(process.cwd())}`;
  const errMsg = `${redText(ERROR.invalidCommand)}${os.EOL}`;

  rl.on('line', async (input) => {
    const command = input.trim().split(' ', 1)[0];

    const commandArgs =
      input &&
      input
        .match(/(?:[^\s"]+|"[^"]*")+/g)
        .map((arg) => arg.replace(/"/g, ''))
        .slice(1);

    if (!Object.values(COMMAND).includes(command) && command !== '') {
      console.log(errMsg);
      console.log(dirMsg);
      return;
    }

    if (command === COMMAND.exit) {
      rl.close();
      process.exit();
    }

    if (Object.values(COMMAND_FS).includes(command)) {
      await fsController(command, commandArgs);
    } else if (command === COMMAND.os) {
      await osController(commandArgs);
    }

    console.log(dirMsg);
  });
};

initApp();
