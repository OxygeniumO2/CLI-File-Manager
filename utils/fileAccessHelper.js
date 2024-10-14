import { access } from 'fs/promises';
import { CUSTOM_ERROR_TEXT } from './constants.js';

const accessHelper = async (from, to, fileName) => {
  try {
    await access(from);
  } catch (err) {
    throw err;
  }

  try {
    await access(to);
    throw new Error(
      `${CUSTOM_ERROR_TEXT}File with name "${fileName}" already exists in the destination directory`
    );
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }
};

export default accessHelper;
