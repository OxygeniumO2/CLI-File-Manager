import {
  COMMAND_FS,
  COMMAND_FS_SINGLE_ARG,
  COMMAND_FS_NO_ARG,
  COMMAND_FS_MULTI_ARGS,
  ERROR,
} from '../../utils/constants.js';
import listOfFiles from './listOfFiles.js';
import changeDirectory from './changeDirectory.js';
import readFile from './readFile.js';
import createFile from './createFile.js';
import renameFile from './renameFile.js';
import deleteFile from './deleteFile.js';
import copyFile from './copyFile.js';
import moveFile from './moveFile.js';
import calculateHash from './calculateHash.js';
import compressDecompress from './compressDecompress.js';
import os from 'node:os';
import { redText, yellowText } from '../../utils/consoleTextHelper.js';

const fsController = async (command, args) => {
  const currentCommand = command;
  const commandArgs = args;

  const numberOfArguments = commandArgs.length;

  const errorMsg = redText(`${ERROR.invalidCommand}:`);

  if (COMMAND_FS_NO_ARG.includes(currentCommand) && numberOfArguments > 0) {
    console.log(`${errorMsg} ${yellowText('You should not pass any arguments')}${os.EOL}`);
    return;
  } else if (COMMAND_FS_SINGLE_ARG.includes(currentCommand) && numberOfArguments !== 1) {
    console.log(`${errorMsg} ${yellowText('You should pass only one argument')}${os.EOL}`);
    return;
  } else if (COMMAND_FS_MULTI_ARGS.includes(currentCommand) && numberOfArguments !== 2) {
    console.log(`${errorMsg} ${yellowText('You should pass only two arguments')}${os.EOL}`);
    return;
  }

  switch (currentCommand) {
    case COMMAND_FS.ls:
      await listOfFiles();
      break;
    case COMMAND_FS.up:
      process.chdir('..');
      break;
    case COMMAND_FS.cd:
      await changeDirectory(commandArgs);
      break;
    case COMMAND_FS.cat:
      await readFile(commandArgs);
      break;
    case COMMAND_FS.add:
      await createFile(commandArgs);
      break;
    case COMMAND_FS.rn:
      await renameFile(commandArgs);
      break;
    case COMMAND_FS.rm:
      await deleteFile(commandArgs);
      break;
    case COMMAND_FS.cp:
      await copyFile(commandArgs);
      break;
    case COMMAND_FS.mv:
      await moveFile(commandArgs);
      break;
    case COMMAND_FS.hash:
      await calculateHash(commandArgs);
      break;
    case COMMAND_FS.compress:
      await compressDecompress(currentCommand, commandArgs);
      break;
    case COMMAND_FS.decompress:
      await compressDecompress(currentCommand, commandArgs);
    default:
      break;
  }
};

export default fsController;
