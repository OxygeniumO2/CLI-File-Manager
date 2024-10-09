import fs from 'node:fs/promises';
import path from 'node:path';
import { ERROR } from '../../utils/constants.js';

const deleteFile = async (filePath) => {
  try {
    const pathToFile = path.resolve(process.cwd(), filePath.join(' '));
    await fs.unlink(pathToFile);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default deleteFile;
