import os from 'node:os';

const getEndOfLine = () => {
  const message = 'System end of line: ';

  switch (os.EOL) {
    case '\n':
      console.log(`${message}\\n`);
      break;
    case '\r\n':
      console.log(`${message}\\r\\n`);
      break;
    case '\r':
      console.log(`${message}\\r`);
      break;
  }
};

export default getEndOfLine;
