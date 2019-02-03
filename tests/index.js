import getByDot from '../dist';

const obj = {
  a: { b: 'c' },
  b: [{ c: 'a' }]
};

describe('get-by-dot', () => {
  it('should return an error asking for a valid first parameter.', () => {
    const invalidParameterError = new Error('You have to provide a valid first parameter.');

    expect(() => getByDot()).toThrowError(invalidParameterError);
    expect(() => getByDot(1)).toThrowError(invalidParameterError);
    expect(() => getByDot('obj')).toThrowError(invalidParameterError);
    expect(() => getByDot(null)).toThrowError(invalidParameterError);
  });

  it('should return the given object if the path isn\'t passed.', () => {
    expect(getByDot(obj)).toEqual(obj);
  });

  it('should return path value for a given object.', () => {
    expect(getByDot(obj, 'a.b')).toBe('c');
  });

  it('should return undefined for a path that doesn\'t exists.', () => {
    expect(getByDot(obj, 'a.b.c')).toBe(undefined);
  });

  it('should work with arrays.', () => {
    expect(getByDot(obj, 'b.0.c')).toBe('a');
    expect(getByDot(obj.b, '0.c')).toBe('a');
  });
});
