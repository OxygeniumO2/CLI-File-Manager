import fs from 'node:fs/promises';
import path from 'node:path';
import { ERROR } from '../../utils/constants.js';

const renameFile = async (filePath) => {
  try {
    const pathToFile = path.join(process.cwd(), filePath.join(' '));

    await fs.rename(pathToFile, null);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default renameFile;
