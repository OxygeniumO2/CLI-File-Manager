import fs from 'node:fs/promises';
import { ERROR } from '../../utils/constants.js';
import os from 'node:os';

const listOfFiles = async () => {
  try {
    const dir = await fs.opendir(process.cwd());

    const tableData = [];

    for await (const dirent of dir) {
      tableData.push({
        Name: dirent.name,
        Type: dirent.isDirectory() ? 'Directory' : 'File',
      });
    }

    tableData.sort((a, b) => {
      if (a.Type === 'Directory' && b.Type === 'File') return -1;
      if (a.Type === 'File' && b.Type === 'Directory') return 1;

      if (a.Name < b.Name) return -1;
      if (a.Name > b.Name) return 1;

      return 0;
    });

    console.table(tableData);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default listOfFiles;
