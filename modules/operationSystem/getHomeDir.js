import os from 'node:os';
import errorHandler from '../../utils/errorHandler.js';

const getHomeDir = () => {
  try {
    console.log(`Home directory is: ${os.homedir()}${os.EOL}`);
  } catch (err) {
    errorHandler(err);
  }
};

export default getHomeDir;
