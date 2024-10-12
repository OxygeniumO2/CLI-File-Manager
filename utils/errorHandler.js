import { ERROR, ERROR_MESSAGES, CUSTOM_ERROR_TEXT } from './constants.js';
import os from 'node:os';

const errorHandler = (err) => {
  if (err.code && Object.keys(ERROR_MESSAGES).includes(err.code)) {
    console.log(`${ERROR.operationFailed}: ${ERROR_MESSAGES[err.code]}${os.EOL}`);
  } else if (err.message.startsWith(CUSTOM_ERROR_TEXT)) {
    console.log(`${ERROR.operationFailed}: ${err.message.replace(CUSTOM_ERROR_TEXT, '')}${os.EOL}`);
  } else {
    console.log(`${ERROR.operationFailed}${os.EOL}`);
  }
};

export default errorHandler;
