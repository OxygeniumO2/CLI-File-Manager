import { ERROR } from '../../utils/constants.js';
import copyMoveHelper from './copyMoveHelper.js';

const copyFile = async (filePath) => {
  try {
    const currentArgs = filePath;
    await copyMoveHelper(currentArgs);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default copyFile;
