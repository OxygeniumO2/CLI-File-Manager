import os from 'node:os';
import copyMoveHelper from './copyMoveHelper.js';
import errorHandler from '../../utils/errorHandler.js';

const copyFile = async (filePath) => {
  try {
    const currentArgs = filePath;
    const [fileName, dirName] = await copyMoveHelper(currentArgs);

    const successfullyMsg = `File "${fileName}" successfully copied to directory "${dirName}"${os.EOL}`;

    console.log(successfullyMsg);
  } catch (err) {
    errorHandler(err);
  }
};

export default copyFile;
