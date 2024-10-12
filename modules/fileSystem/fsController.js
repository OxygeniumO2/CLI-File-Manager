import { COMMAND_FS } from '../../utils/constants.js';
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

const fsController = async (command, args) => {
  const currentCommand = command;
  const commandArgs = args;

  switch (currentCommand) {
    case COMMAND_FS.ls:
      await listOfFiles(commandArgs);
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
      compressDecompress(currentCommand, commandArgs);
      break;
    case COMMAND_FS.decompress:
      compressDecompress(currentCommand, commandArgs);
    default:
      break;
  }
};

export default fsController;
