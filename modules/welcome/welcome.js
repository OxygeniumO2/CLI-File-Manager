import os from 'node:os';
import rl from '../readLine/readLine.js';

const welcome = async () => {
  const currUserName =
    process.env.npm_config_username || process.argv[2].trim().split('=')[1] || 'Guest';

  const currUserNameFirstLetter = currUserName[0].toUpperCase();

  const currUserNameRest = currUserName.slice(1);

  const completeUserName = `${currUserNameFirstLetter}${currUserNameRest}`;

  const welcomeMessage = `Welcome to the File Manager, ${completeUserName}!${os.EOL}`;
  const goodByeMessage = `${os.EOL}Thank you for using File Manager, ${completeUserName}, goodbye!${os.EOL}`;

  await process.chdir(os.homedir());
  const directoryMessage = `You are currently in ${process.cwd()}`;

  console.log(welcomeMessage);
  console.log(directoryMessage);

  rl.on('close', () => console.log(goodByeMessage));
};

export default welcome;
