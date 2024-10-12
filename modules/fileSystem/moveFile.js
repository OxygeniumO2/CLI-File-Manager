import fs from 'node:fs/promises';
import os from 'node:os';
import copyMoveHelper from './copyMoveHelper.js';
import errorHandler from '../../utils/errorHandler.js';

const moveFile = async (filePath) => {
  try {
    const currentArgs = filePath;
    const [fileName, dirName] = await copyMoveHelper(currentArgs);
    await fs.unlink(currentArgs[0]);

    const successfullyMsg = `File "${fileName}" successfully moved to directory "${dirName}"${os.EOL}`;

    console.log(successfullyMsg);
  } catch (err) {
    errorHandler(err);
  }
};

export default moveFile;
