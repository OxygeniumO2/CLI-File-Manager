import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import errorHandler from '../../utils/errorHandler.js';
import { greenText, cyanText } from '../../utils/consoleTextHelper.js';

const deleteFile = async (filePath) => {
  try {
    const pathToFile = path.resolve(process.cwd(), filePath.join(' '));
    await fs.unlink(pathToFile);

    const fileText = greenText('File ');
    const createdText = greenText(' successfully removed ');
    const fileNameCyan = cyanText(`"${path.basename(pathToFile)}"`);

    const successfullyMsg = `${fileText}${fileNameCyan}${createdText}${os.EOL}`;

    console.log(successfullyMsg);
  } catch (err) {
    errorHandler(err);
  }
};

export default deleteFile;
