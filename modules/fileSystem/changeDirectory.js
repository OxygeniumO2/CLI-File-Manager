import { ERROR } from '../../utils/constants.js';

const changeDirectory = async (path) => {
  try {
    const joinedPath = path.join(' ');
    await process.chdir(joinedPath);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default changeDirectory;
