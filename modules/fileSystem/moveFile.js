import fs from 'node:fs/promises';
import { ERROR } from '../../utils/constants.js';
import copyMoveHelper from './copyMoveHelper.js';

const moveFile = async (filePath) => {
  try {
    const currentArgs = filePath;
    await copyMoveHelper(currentArgs);
    await fs.unlink(currentArgs[0]);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default moveFile;
