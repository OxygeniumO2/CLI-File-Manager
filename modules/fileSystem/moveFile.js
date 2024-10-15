import fs from 'node:fs/promises';
import os from 'node:os';
import copyMoveHelper from './copyMoveHelper.js';
import errorHandler from '../../utils/errorHandler.js';
import { greenText, cyanText } from '../../utils/consoleTextHelper.js';

const moveFile = async (filePath) => {
  try {
    const currentArgs = filePath;
    const [fileName, dirName] = await copyMoveHelper(currentArgs);
    await fs.unlink(currentArgs[0]);

    const fileText = greenText('File ');
    const movedText = greenText(' successfully moved to directory ');
    const fileNameCyan = cyanText(`"${fileName}"`);
    const dirNameCyan = cyanText(`"${dirName}"`);

    const successfullyMsg = `${fileText}${fileNameCyan}${movedText}${dirNameCyan}${os.EOL}`;

    console.log(successfullyMsg);
  } catch (err) {
    errorHandler(err);
  }
};

export default moveFile;
