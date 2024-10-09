import os from 'node:os';
import { ERROR } from '../../utils/constants.js';

const getHomeDir = () => {
  try {
    console.log(`Home directory is: ${os.homedir()}`);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default getHomeDir;
