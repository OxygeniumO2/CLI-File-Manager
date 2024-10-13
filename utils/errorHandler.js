import { redText, yellowText } from './consoleTextHelper.js';
import { ERROR, ERROR_MESSAGES, CUSTOM_ERROR_TEXT } from './constants.js';
import os from 'node:os';

const errorHandler = (err) => {
  const errMsgWithColon = redText(`${ERROR.operationFailed}:`);
  const errMsg = redText(`${ERROR.operationFailed}`);

  if (err.code && Object.keys(ERROR_MESSAGES).includes(err.code)) {
    console.log(`${errMsgWithColon} ${yellowText(ERROR_MESSAGES[err.code])}${os.EOL}`);
  } else if (err.message.startsWith(CUSTOM_ERROR_TEXT)) {
    console.log(
      `${errMsgWithColon} ${yellowText(err.message.replace(CUSTOM_ERROR_TEXT, ''))}${os.EOL}`
    );
  } else {
    console.log(`${errMsg}${os.EOL}`);
  }
};

export default errorHandler;
