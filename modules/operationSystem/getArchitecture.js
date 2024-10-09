import os from 'node:os';
import { ERROR } from '../../utils/constants.js';

const getArchitecture = () => {
  try {
    console.log(`Architecture: ${os.arch()}`);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default getArchitecture;
