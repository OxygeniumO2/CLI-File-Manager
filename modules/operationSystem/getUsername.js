import os from 'node:os';
import errorHandler from '../../utils/errorHandler.js';
import { magentaText, yellowText } from '../../utils/consoleTextHelper.js';

const getUsername = () => {
  try {
    const message = magentaText('Username:');
    const username = yellowText(os.userInfo().username);

    console.log(`${message} ${username}${os.EOL}`);
  } catch (err) {
    errorHandler(err);
  }
};

export default getUsername;
