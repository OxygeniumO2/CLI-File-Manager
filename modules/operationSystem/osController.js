import { ERROR, COMMAND_OS_ARGS } from '../../utils/constants.js';
import getCpus from './getCpus.js';
import getHomeDir from './getHomeDir.js';
import getUsername from './getUsername.js';
import getArchitecture from './getArchitecture.js';
import getEndOfLine from './getEndOfLine.js';

const osController = async (args) => {
  try {
    const command = args.join(' ').toLowerCase();

    if (!Object.values(COMMAND_OS_ARGS).includes(command)) {
      console.log(ERROR.invalidCommand);
      return;
    }

    switch (command) {
      case COMMAND_OS_ARGS.eol:
        getEndOfLine();
        break;
      case COMMAND_OS_ARGS.cpus:
        getCpus();
        break;
      case COMMAND_OS_ARGS.homedir:
        getHomeDir();
        break;
      case COMMAND_OS_ARGS.username:
        getUsername();
        break;
      case COMMAND_OS_ARGS.architecture:
        getArchitecture();
        break;
    }
  } catch {
    console.log(ERROR.operationFailed);
  }
};

export default osController;
