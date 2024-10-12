import fs from 'node:fs/promises';
import path from 'node:path';
import errorHandler from '../../utils/errorHandler.js';
import os from 'node:os';

const createFile = async (filePath) => {
  try {
    const pathToFile = path.join(process.cwd(), filePath.join(' '));

    await fs.writeFile(pathToFile, '', {
      flag: 'wx',
    });

    const successfullyMsg = `File "${path.basename(pathToFile)}" successfully created${os.EOL}`;

    console.log(successfullyMsg);
  } catch (err) {
    errorHandler(err);
  }
};

export default createFile;
