import fs from 'node:fs/promises';
import { ERROR } from '../../utils/constants.js';
import pathResolver from '../../utils/pathHelper.js';

const renameFile = async (filePath) => {
  try {
    const currentArgs = filePath;
    const [pathToFile, pathToNewFile] = pathResolver(currentArgs);

    await fs.rename(pathToFile, pathToNewFile);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default renameFile;
