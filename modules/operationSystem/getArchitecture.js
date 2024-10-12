import os from 'node:os';
import errorHandler from '../../utils/errorHandler.js';

const getArchitecture = () => {
  try {
    console.log(`Architecture: ${os.arch()}`);
  } catch (err) {
    errorHandler(err);
  }
};

export default getArchitecture;
