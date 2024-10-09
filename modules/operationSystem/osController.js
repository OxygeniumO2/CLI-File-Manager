import { ERROR, OS_COMMAND } from '../../utils/constants.js';
import getCpus from './getCpus.js';
import getHomeDir from './getHomeDir.js';
import getUsername from './getUsername.js';
import getArchitecture from './getArchitecture.js';
import getEndOfLine from './getEndOfLine.js';

const osController = async (args) => {
  try {
    const command = args.join(' ').toLowerCase();

    if (!Object.values(OS_COMMAND).includes(command)) {
      console.log(ERROR.operationFailed);
      return;
    }

    switch (command) {
      case OS_COMMAND.eol:
        getEndOfLine();
        break;
      case OS_COMMAND.cpus:
        getCpus();
        break;
      case OS_COMMAND.homedir:
        getHomeDir();
        break;
      case OS_COMMAND.username:
        getUsername();
        break;
      case OS_COMMAND.architecture:
        getArchitecture();
        break;
    }
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default osController;
