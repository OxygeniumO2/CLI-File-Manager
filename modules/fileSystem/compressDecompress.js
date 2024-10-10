import pathResolver from '../../utils/pathHelper.js';
import { BrotliCompress, BrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { COMMAND_FS } from '../../utils/constants.js';
import { ERROR } from '../../utils/constants.js';
import fs from 'node:fs';

const compressDecompress = async (command, args) => {
  try {
    const currentArgs = args;
    const currentCommand = command;

    const [from, to] = pathResolver(currentArgs);
    const brotli = currentCommand === COMMAND_FS.compress ? BrotliCompress() : BrotliDecompress();

    const fromStream = fs.createReadStream(from);
    const toStream = fs.createWriteStream(to);

    await pipeline(fromStream, brotli, toStream);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default compressDecompress;
