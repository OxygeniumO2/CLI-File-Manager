import fs from 'node:fs';
import path from 'node:path';
import { ERROR } from '../../utils/constants.js';

const readFile = async (filePath) => {
  try {
    const pathToFile = path.join(process.cwd(), filePath.join(' '));

    const readStream = fs.createReadStream(pathToFile);

    return new Promise((resolve, reject) => {
      readStream.on('data', (chunk) => {
        console.log(chunk.toString());
      });

      readStream.on('end', resolve);

      readStream.on('error', () => {
        console.log(ERROR.operationFailed);
        resolve();
      });
    });
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default readFile;
