import fs from 'node:fs';
import path from 'node:path';
import { ERROR } from '../../utils/constants.js';
import pathResolver from '../../utils/pathHelper.js';
import { pipeline } from 'node:stream/promises';

const copyMoveHelper = async (filePath) => {
  try {
    const currentArgs = filePath;
    const [pathToFile, pathToDirectory] = pathResolver(currentArgs);

    const fileName = path.basename(pathToFile);

    const pathToNewFile = path.join(pathToDirectory, fileName);

    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathToNewFile);

    await pipeline(readStream, writeStream);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default copyMoveHelper;
