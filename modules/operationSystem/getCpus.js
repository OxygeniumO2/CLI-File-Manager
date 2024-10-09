import os from 'os';
import { ERROR } from '../../utils/constants.js';

const getCpus = async () => {
  try {
    const tableData = os.cpus().reduce((acc, item) => {
      acc.push({
        Model: item.model,
        Speed: `${item.speed / 1000} GHz`,
      });
      return acc;
    }, []);

    console.table(tableData);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default getCpus;
