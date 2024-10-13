import os from 'node:os';
import { magentaText, yellowText } from '../../utils/consoleTextHelper.js';

const getEndOfLine = () => {
  const message = magentaText('System end of line:');

  switch (os.EOL) {
    case '\n':
      console.log(`${message} ${yellowText('\\n')}${os.EOL}`);
      break;
    case '\r\n':
      console.log(`${message} ${yellowText('\\r\\n')}${os.EOL}`);
      break;
    case '\r':
      console.log(`${message} ${yellowText('\\r')}${os.EOL}`);
      break;
  }
};

export default getEndOfLine;
