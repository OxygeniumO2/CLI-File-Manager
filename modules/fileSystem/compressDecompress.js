import pathResolver from '../../utils/pathHelper.js';
import { BrotliCompress, BrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { COMMAND_FS } from '../../utils/constants.js';
import fs from 'node:fs';
import path from 'node:path';
import errorHandler from '../../utils/errorHandler.js';
import os from 'node:os';
import { greenText, cyanText } from '../../utils/consoleTextHelper.js';

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

    const fileText = greenText('File ');
    const compressedText = greenText(' successfully compressed to directory ');
    const decompressedText = greenText(' successfully decompressed to directory ');
    const fileNameCyan = cyanText(`"${fileName}"`);
    const directoryCyan = cyanText(`"${path.dirname(to)}"`);

    const compressMsg = `${fileText}${fileNameCyan}${compressedText}${directoryCyan}${os.EOL}`;
    const decompressMsg = `${fileText}${fileNameCyan}${decompressedText}${directoryCyan}${os.EOL}`;

    console.log(currentCommand === COMMAND_FS.compress ? compressMsg : decompressMsg);
  } catch (err) {
    errorHandler(err);
  }
};

export default compressDecompress;
