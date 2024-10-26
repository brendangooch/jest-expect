# jest-expect
Provides wrapper functions for common jest expect methods for slightly different syntax

    import * as EXPECT from '@brendangooch/jest-expect';

    test('test something', () => {
        
        expect(foo).toBe(10);
        EXPECT.toBe(foo, 10);

        expect(foo).not.toBe(20);
        EXPECT.notToBe(foo, 20);

        expect(foo).toBeTruthy();
        EXPECT.truthy(foo);

        // etc

    })