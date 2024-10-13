import os from 'node:os';
import errorHandler from '../../utils/errorHandler.js';
import { magentaText, yellowText } from '../../utils/consoleTextHelper.js';

const getHomeDir = () => {
  try {
    const message = magentaText('Home directory:');
    const homeDir = yellowText(os.homedir());

    console.log(`${message} ${homeDir}${os.EOL}`);
  } catch (err) {
    errorHandler(err);
  }
};

export default getHomeDir;
