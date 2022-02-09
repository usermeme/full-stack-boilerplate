const getEnvVariables = (): Record<string, string> => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return window.ENVIRONMENT_VARIABLES;
};

export default getEnvVariables;
