import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import errorHandler from '../../utils/errorHandler.js';

const calculateHash = async (filePath) => {
  try {
    const pathToFile = path.resolve(process.cwd(), filePath.join(' '));
    const readStream = fs.createReadStream(pathToFile);

    const hash = crypto.createHash('sha256');

    return new Promise((resolve, reject) => {
      readStream.on('data', (chunk) => {
        hash.update(chunk);
      });

      readStream.on('end', async () => {
        console.log(hash.digest('hex'));
        resolve();
      });

      readStream.on('error', (err) => {
        errorHandler(err);
        resolve();
      });
    });
  } catch (err) {
    errorHandler(err);
  }
};

export default calculateHash;
