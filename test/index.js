import getByDot from '../dist';

const obj = {
  a: { b: 'c' },
  b: [{ c: 'a' }]
};

test('Should return an error asking for a valid first parameter.', () => {
  const invalidParameterError = new Error('You have to provide a valid first parameter.');

  expect(() => getByDot()).toThrowError(invalidParameterError);
  expect(() => getByDot(1)).toThrowError(invalidParameterError);
  expect(() => getByDot('obj')).toThrowError(invalidParameterError);
  expect(() => getByDot(null)).toThrowError(invalidParameterError);
});

test('Should return the given object without path on second parameter.', () => {
  expect(getByDot(obj)).toEqual(obj);
});

test('Should return path value for a given object.', () => {
  expect(getByDot(obj, 'a.b')).toBe('c');
});

test('Should return undefined for a path that doesn\'t exists.', () => {
  expect(getByDot(obj, 'a.b.c')).toBe(undefined);
});

test('Should work with arrays.', () => {
  expect(getByDot(obj, 'b.0.c')).toBe('a');
  expect(getByDot(obj.b, '0.c')).toBe('a');
});
