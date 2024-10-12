import os from 'node:os';
import errorHandler from '../../utils/errorHandler.js';

const getUsername = () => {
  try {
    console.log(`Username is: ${os.userInfo().username}${os.EOL}`);
  } catch (err) {
    errorHandler(err);
  }
};

export default getUsername;
