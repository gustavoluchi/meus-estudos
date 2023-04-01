export const keyNameMirror = <T extends {}>(object: T): {[key in keyof typeof object]: key} => {
  const keys = Object.keys(object);
  let result: any = {};
  keys.forEach(key => (result[key] = key));
  return result;
};
