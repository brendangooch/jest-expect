/**
 * provides client with a slightly simpler way to write jest expect statements
 * assumes client has installed jest
 * 
 */

export class JestExpect {

    private negated: boolean = false;

    public get not(): JestExpect {
        this.negated = true;
        return this;
    }

    public toBe(actual: any, expected: any): void {
        if (this.negated) expect(actual).not.toBe(expected);
        else expect(actual).toBe(expected);
        this.negated = false;
    }

    public toBeCloseTo(actual: any, expected: number, numDigits: number = 2): void {
        if (this.negated) expect(actual).not.toBeCloseTo(expected, numDigits);
        else expect(actual).toBeCloseTo(expected);
        this.negated = false;
    }

    public truthy(actual: any): void {
        if (this.negated) expect(actual).not.toBeTruthy();
        else expect(actual).toBeTruthy();
        this.negated = false;
    }

    public falsy(actual: boolean): void {
        if (this.negated) expect(actual).not.toBeFalsy();
        else expect(actual).toBeFalsy();
        this.negated = false;
    }

    public toThrow(fn: Function): void {
        if (this.negated) expect(fn).not.toThrow();
        else expect(fn).toThrow();
        this.negated = false;
    }

    public toBeGreaterThan(actual: any, expected: number | bigint): void {
        if (this.negated) expect(actual).not.toBeGreaterThan(expected);
        else expect(actual).toBeGreaterThan(expected);
        this.negated = false;
    }

    public toBeGreaterThanOrEqual(actual: any, expected: number | bigint): void {
        if (this.negated) expect(actual).not.toBeGreaterThanOrEqual(expected);
        else expect(actual).toBeGreaterThanOrEqual(expected);
        this.negated = false;
    }

    public toBeLessThan(actual: any, expected: number | bigint): void {
        if (this.negated) expect(actual).not.toBeLessThan(expected);
        else expect(actual).toBeLessThan(expected);
        this.negated = false;
    }

    public toBeLesshanOrEqual(actual: any, expected: number | bigint): void {
        if (this.negated) expect(actual).not.toBeLessThanOrEqual(expected);
        else expect(actual).toBeLessThanOrEqual(expected);
        this.negated = false;
    }

    public toBeNull(actual: any): void {
        if (this.negated) expect(actual).not.toBeNull();
        else expect(actual).toBeNull();
        this.negated = false;
    }

    public toBeUndefined(actual: any): void {
        if (this.negated) expect(actual).not.toBeUndefined();
        else expect(actual).toBeUndefined();
        this.negated = false;
    }

    public toEqual(expression: any, expected: any): void {
        if (this.negated) expect(expression).not.toEqual(expected);
        else expect(expression).toEqual(expected);
        this.negated = false;
    }

    public toBeSameArray(expression: any[], expected: any[]): void {
        if (this.negated) expect(expression.sort()).not.toEqual(expected.sort());
        else expect(expression.sort()).toEqual(expected.sort());
        this.negated = false;
    }

    public toContain(expression: any[], expected: any[]): void {
        if (this.negated) expect(expression).not.toContain(expected);
        else expect(expression).toContain(expected);
        this.negated = false;
    }

    public toHaveLength(expression: any[], expected: number): void {
        if (this.negated) expect(expression).not.toHaveLength(expected);
        else expect(expression).toHaveLength(expected);
        this.negated = false;
    }

}