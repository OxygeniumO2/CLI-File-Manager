import fs from 'node:fs/promises';
import path from 'node:path';
import { ERROR, ERROR_CODE } from '../../utils/constants.js';

const createFile = async (filePath) => {
  try {
    const pathToFile = path.join(process.cwd(), filePath.join(' '));

    await fs.writeFile(pathToFile, '', {
      flag: 'wx',
    });
  } catch (err) {
    if (err.code === ERROR_CODE.exist) {
      console.log(`${ERROR.operationFailed}: File already exists`);
    } else {
      console.log(ERROR.operationFailed);
    }
  }
};

export default createFile;
