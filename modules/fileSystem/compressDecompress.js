import pathResolver from '../../utils/pathHelper.js';
import { BrotliCompress, BrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { COMMAND_FS } from '../../utils/constants.js';
import { ERROR } from '../../utils/constants.js';
import fs from 'node:fs';
import path from 'node:path';

const compressDecompress = async (command, args) => {
  try {
    const currentArgs = args;
    const currentCommand = command;

    let [from, to] = pathResolver(currentArgs);

    const brotli = currentCommand === COMMAND_FS.compress ? BrotliCompress() : BrotliDecompress();

    let fileName = path.basename(from);

    if (currentCommand === COMMAND_FS.compress) {
      to = path.join(to, `${fileName}.br`);
    } else {
      if (path.extname(fileName) === '.br') {
        to = path.join(to, fileName.slice(0, -3));
      } else {
        to = path.join(to, fileName);
      }
    }

    const fromStream = fs.createReadStream(from);
    const toStream = fs.createWriteStream(to);

    await pipeline(fromStream, brotli, toStream);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default compressDecompress;
