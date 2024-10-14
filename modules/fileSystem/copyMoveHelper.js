import fs from 'node:fs';
import path from 'node:path';
import pathResolver from '../../utils/pathHelper.js';
import { pipeline } from 'node:stream/promises';
import accessHelper from '../../utils/fileAccessHelper.js';

const copyMoveHelper = async (filePath) => {
  try {
    const currentArgs = filePath;
    const [pathToFile, pathToDirectory] = pathResolver(currentArgs);

    const fileName = path.basename(pathToFile);

    const pathToNewFile = path.join(pathToDirectory, fileName);

    await accessHelper(pathToFile, pathToNewFile, fileName);

    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathToNewFile);

    await pipeline(readStream, writeStream);

    return [path.basename(pathToFile), path.dirname(pathToNewFile)];
  } catch (err) {
    throw err;
  }
};

export default copyMoveHelper;
