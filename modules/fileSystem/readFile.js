import fs from 'node:fs';
import path from 'node:path';
import { ERROR } from '../../utils/constants.js';
import errorHandler from '../../utils/errorHandler.js';

const readFile = async (filePath) => {
  try {
    const pathToFile = path.resolve(process.cwd(), filePath.join(' '));

    const readStream = fs.createReadStream(pathToFile);

    return new Promise((resolve, reject) => {
      readStream.on('data', (chunk) => {
        console.log(chunk.toString());
      });

      readStream.on('end', resolve);

      readStream.on('error', (err) => {
        errorHandler(err);
        resolve();
      });
    });
  } catch (err) {
    errorHandler(err);
  }
};

export default readFile;
