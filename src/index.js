const getByDot = (obj, path) => {
  const invalidTypes = ['undefined', 'number', 'string'];
  const invalidValues = [null];
  const type = typeof obj;

  if(invalidTypes.includes(type) || invalidValues.includes(obj)) {
    throw new Error('You have to provide a valid first parameter.');
  }

  if(!path) return obj;
  if(path.indexOf('.') === -1) return obj[path];

  return path.split('.').reduce((obj1, part) => {
    if(typeof obj1 !== 'undefined') {
      return (typeof obj1 === 'object') ? obj1[part] : undefined;
    }

    return 'undefined';
  }, obj);
};

export default getByDot;
