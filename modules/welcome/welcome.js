import os from 'node:os';
import rl from '../readLine/readLine.js';
import { cyanText, yellowText, magentaText } from '../../utils/consoleTextHelper.js';

const welcome = async () => {
  const currUserName =
    process.env.npm_config_username || process.argv[2].trim().split('=')[1] || 'Guest';

  const currUserNameFirstLetter = currUserName[0].toUpperCase();

  const currUserNameRest = currUserName.slice(1);

  const completeUserName = `${yellowText(`${currUserNameFirstLetter}${currUserNameRest}`)}`;

  const welcomeMessage = `${cyanText('Welcome to the File Manager,')} ${completeUserName}${cyanText(
    '!'
  )}${os.EOL}`;

  const goodByeMessage = `${os.EOL}${magentaText(
    'Thank you for using File Manager,'
  )} ${completeUserName}${magentaText(', goodbye!')}${os.EOL}`;

  await process.chdir(os.homedir());

  const directoryMessage = `You are currently in ${cyanText(process.cwd())}`;

  console.log(welcomeMessage);
  console.log(directoryMessage);

  rl.on('close', () => console.log(goodByeMessage));
};

export default welcome;
