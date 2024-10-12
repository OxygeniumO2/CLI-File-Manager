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

export const ERROR_MESSAGES = {
  EEXIST: 'File or directory already exists',
  ENOENT: 'File or directory does not exist',
  EACCES: 'Permission denied',
  EPERM: 'Operation not permitted',
  EISDIR: 'Is a directory, not a file',
  ENOTDIR: 'Not a directory',
  EROFS: 'Read-only file system',
  ENOMEM: 'Not enough memory',
  ETIMEDOUT: 'Operation timed out',
  EBUSY: 'Resource busy or locked',
  EXDEV: 'Cross-device link not permitted',
};

export const COMMAND_FS_NO_ARG = [COMMAND_FS.ls, COMMAND_FS.up];

export const COMMAND_FS_SINGLE_ARG = [
  COMMAND_FS.cat,
  COMMAND_FS.add,
  COMMAND_FS.rm,
  COMMAND_FS.cd,
  COMMAND_FS.hash,
];

export const COMMAND_FS_MULTI_ARGS = [
  COMMAND_FS.rn,
  COMMAND_FS.cp,
  COMMAND_FS.mv,
  COMMAND_FS.compress,
  COMMAND_FS.decompress,
];

export const CUSTOM_ERROR_TEXT = 'Custom error:';
