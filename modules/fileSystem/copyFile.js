import os from 'node:os';
import copyMoveHelper from './copyMoveHelper.js';
import errorHandler from '../../utils/errorHandler.js';
import { greenText, cyanText } from '../../utils/consoleTextHelper.js';

const copyFile = async (filePath) => {
  try {
    const currentArgs = filePath;
    const [fileName, dirName] = await copyMoveHelper(currentArgs);

    const fileText = greenText('File ');
    const copiedText = greenText(' successfully copied to directory ');
    const fileNameCyan = cyanText(`"${fileName}"`);
    const directoryCyan = cyanText(`"${dirName}"`);

    const successfullyMsg = `${fileText}${fileNameCyan}${copiedText}${directoryCyan}${os.EOL}`;

    console.log(successfullyMsg);
  } catch (err) {
    errorHandler(err);
  }
};

export default copyFile;
