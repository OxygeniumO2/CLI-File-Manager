import { ERROR } from '../../utils/constants.js';

const changeDirectory = async (path) => {
  try {
    const joinedPath = path.join(' ');
    const pathToMove = joinedPath[1] === ':' ? joinedPath + '\\' : joinedPath;

    await process.chdir(pathToMove);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default changeDirectory;
