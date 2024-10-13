import fs from 'node:fs/promises';
import path from 'node:path';
import errorHandler from '../../utils/errorHandler.js';
import os from 'node:os';
import { greenText, cyanText } from '../../utils/consoleTextHelper.js';

const createFile = async (filePath) => {
  try {
    const pathToFile = path.join(process.cwd(), filePath.join(' '));

    await fs.writeFile(pathToFile, '', {
      flag: 'wx',
    });

    const fileText = greenText('File ');
    const createdText = greenText(' successfully created ');
    const fileNameCyan = cyanText(`"${path.basename(pathToFile)}"`);

    const successfullyMsg = `${fileText}${fileNameCyan}${createdText}${os.EOL}`;

    console.log(successfullyMsg);
  } catch (err) {
    errorHandler(err);
  }
};

export default createFile;
