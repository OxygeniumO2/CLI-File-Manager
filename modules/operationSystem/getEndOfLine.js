import os from 'node:os';

const getEndOfLine = () => {
  const message = 'System end of line: ';

  switch (os.EOL) {
    case '\n':
      console.log(`${message}\\n${os.EOL}`);
      break;
    case '\r\n':
      console.log(`${message}\\r\\n${os.EOL}`);
      break;
    case '\r':
      console.log(`${message}\\r${os.EOL}`);
      break;
  }
};

export default getEndOfLine;
