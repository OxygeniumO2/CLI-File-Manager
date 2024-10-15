import os from 'node:os';
import errorHandler from '../../utils/errorHandler.js';
import { magentaText, yellowText } from '../../utils/consoleTextHelper.js';

const getArchitecture = () => {
  try {
    const message = magentaText('System architecture:');
    const architecture = yellowText(os.arch());

    console.log(`${message} ${architecture}${os.EOL}`);
  } catch (err) {
    errorHandler(err);
  }
};

export default getArchitecture;
