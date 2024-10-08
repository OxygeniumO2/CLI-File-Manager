import welcome from './modules/welcome/welcome.js';
import rl from './modules/readLine/readLine.js';
import { COMMAND } from './utils/constants.js';
import ls from './modules/fileSystem/ls.js';

const initApp = async () => {
  welcome();

  rl.on('line', async (input) => {
    const command = input.trim();

    if (command === COMMAND.exit) rl.close();

    if (command === COMMAND.ls) await ls();

    console.log(`You are currently in ${process.cwd()}`);
  });
};

initApp();
