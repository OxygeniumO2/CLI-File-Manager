const COMMAND_OTHER = {
  exit: '.exit',
};

const COMMAND_OS = {
  os: 'os',
};

export const COMMAND_FS = {
  ls: 'ls',
  up: 'up',
  cd: 'cd',
  cat: 'cat',
  add: 'add',
  rn: 'rn',
  rm: 'rm',
  cp: 'cp',
  mv: 'mv',
  hash: 'hash',
  compress: 'compress',
  decompress: 'decompress',
};

export const COMMAND_OS_ARGS = {
  eol: '--eol',
  cpus: '--cpus',
  homedir: '--homedir',
  username: '--username',
  architecture: '--architecture',
};

export const COMMAND = {
  ...COMMAND_FS,
  ...COMMAND_OS,
  ...COMMAND_OTHER,
};

export const ERROR = {
  invalidCommand: 'Invalid input',
  operationFailed: 'Operation failed',
};

export const ERROR_CODE = {
  exist: 'EEXIST',
};
