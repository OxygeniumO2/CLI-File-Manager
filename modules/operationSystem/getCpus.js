import os from 'os';
import errorHandler from '../../utils/errorHandler.js';

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
  } catch (err) {
    errorHandler(err);
  }
};

export default getCpus;
