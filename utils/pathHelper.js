import path from 'node:path';

const pathResolver = (pathArgs) => {
  const fileSource = pathArgs[0];
  const destination = pathArgs[1];

  const pathToSource = path.resolve(process.cwd(), fileSource);
  const pathToDestination = path.resolve(process.cwd(), destination);

  return [pathToSource, pathToDestination];
};

export default pathResolver;
