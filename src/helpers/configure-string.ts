const configureString = (
  ...parameters: [...string[], Record<string, number | string>]
) => {
  const copiedArguments = [...parameters];

  const options = copiedArguments.pop() as Record<string, number | string>;

  let result = copiedArguments.map(String).join("");

  for (const [key, value] of Object.entries(options)) {
    result = result.replace(`:${key}`, String(value));
  }

  return result;
};

export { configureString };
