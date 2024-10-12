import { ERROR, ERROR_MESSAGES } from './constants.js';
import os from 'node:os';

const errorHandler = (err) => {
  if (err.code && Object.keys(ERROR_MESSAGES).includes(err.code)) {
    console.log(`${ERROR.operationFailed}: ${ERROR_MESSAGES[err.code]}${os.EOL}`);
  } else {
    console.log(`${ERROR.operationFailed}${os.EOL}`);
  }
};

export default errorHandler;
