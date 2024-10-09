import fs from 'node:fs/promises';
import path from 'node:path';
import { ERROR } from '../../utils/constants.js';

const renameFile = async (filePath) => {
  try {
    const fileToRename = filePath[0];
    const newFileName = filePath[1];

    const pathToFile = path.resolve(process.cwd(), fileToRename);
    const pathToNewFile = path.resolve(process.cwd(), newFileName);

    await fs.rename(pathToFile, pathToNewFile);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default renameFile;
