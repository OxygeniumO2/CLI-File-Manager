import os from 'os';

const getEndOfLine = () => {
  switch (os.EOL) {
    case '\n':
      console.log(`System end of line: \\n`);
      break;
    case '\r\n':
      console.log(`System end of line: \\r\\n`);
      break;
    case '\r':
      console.log(`System end of line: \\r`);
      break;
  }
};

export default getEndOfLine;
