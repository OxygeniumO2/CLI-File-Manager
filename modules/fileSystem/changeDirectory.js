import errorHandler from '../../utils/errorHandler.js';

const changeDirectory = async (path) => {
  try {
    const joinedPath = path.join(' ');
    const pathToMove = joinedPath[1] === ':' ? joinedPath + '\\' : joinedPath;

    process.chdir(pathToMove);
  } catch (err) {
    errorHandler(err);
  }
};

export default changeDirectory;
