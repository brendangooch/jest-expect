# jest-expect

Provides a slightly simpler syntax for writing jest tests + array comparison method

You must install Jest package to use this package

```
import JestExpect from '@brendangooch/jest-expect';
const EXPECT = new JestExpect();
test('some test', () => {
    
    expect(foo).toBe(10);
    EXPECT.toBe(foo, 10);

    expect(foo).not.toBe(20);
    EXPECT.not.ToBe(foo, 20);

    expect(foo).toBeTruthy();
    EXPECT.truthy(foo);

    expect(foo).not.toBeTruthy();
    EXPECT.not.truthy(foo);

    expect(foo).toEqual({ 1: 'foo', 2: 'bar' });
    EXPECT.toEqual(foo, { 1: 'foo', 2: 'bar' });

    expect(foo).not.toEqual({ 1: 'foo', 2: 'bar' });
    EXPECT.not.toEqual(foo, { 1: 'foo', 2: 'bar' });

    // extended functionality, works with arrays of primitive datatypes
    EXPECT.toBeSameArray(foo, [1, 2, 3]);

    // etc

});
```