import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import errorHandler from '../../utils/errorHandler.js';

const deleteFile = async (filePath) => {
  try {
    const pathToFile = path.resolve(process.cwd(), filePath.join(' '));
    await fs.unlink(pathToFile);

    const successfullyMsg = `File "${path.basename(pathToFile)}" successfully removed${os.EOL}`;

    console.log(successfullyMsg);
  } catch (err) {
    errorHandler(err);
  }
};

export default deleteFile;
