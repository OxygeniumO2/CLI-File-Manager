import fs from 'node:fs';
import path from 'node:path';
import pathResolver from '../../utils/pathHelper.js';
import { pipeline } from 'node:stream/promises';
import { access } from 'node:fs/promises';
import { ERROR_MESSAGES, CUSTOM_ERROR_TEXT } from '../../utils/constants.js';

const copyMoveHelper = async (filePath) => {
  try {
    const currentArgs = filePath;
    const [pathToFile, pathToDirectory] = pathResolver(currentArgs);

    const fileName = path.basename(pathToFile);

    const pathToNewFile = path.join(pathToDirectory, fileName);

    try {
      await access(pathToFile);
    } catch (err) {
      throw err;
    }

    try {
      await access(pathToNewFile);
      throw new Error(
        `${CUSTOM_ERROR_TEXT}File with name "${fileName}" already exists in the destination directory`
      );
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
    }

    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathToNewFile);

    await pipeline(readStream, writeStream);

    return [path.basename(pathToFile), path.dirname(pathToNewFile)];
  } catch (err) {
    throw err;
  }
};

export default copyMoveHelper;
