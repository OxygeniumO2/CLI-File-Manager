import os from 'node:os';

const getUsername = () => {
  try {
    console.log(`Username is: ${os.userInfo().username}`);
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default getUsername;
