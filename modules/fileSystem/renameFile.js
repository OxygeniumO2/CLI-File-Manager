import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import pathResolver from '../../utils/pathHelper.js';
import errorHandler from '../../utils/errorHandler.js';

const renameFile = async (filePath) => {
  try {
    const currentArgs = filePath;
    const [pathToFile, pathToNewFile] = pathResolver(currentArgs);

    const currDirPath = path.dirname(pathToFile);
    const renamedFile = path.basename(pathToNewFile);

    const pathToNewDir = path.join(currDirPath, renamedFile);

    await fs.rename(pathToFile, pathToNewDir);

    const successfullyMsg = `File "${path.basename(
      pathToFile
    )}" successfully renamed to "${path.basename(pathToNewFile)}"${os.EOL}`;

    console.log(successfullyMsg);
  } catch (err) {
    errorHandler(err);
  }
};

export default renameFile;
