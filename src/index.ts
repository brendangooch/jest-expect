/**
 * 
 */

export function toBe(expression: string | number, value: string | number): void {
    expect(expression).toBe(value);
}

export function notToBe(expression: string | number, value: string | number): void {
    expect(expression).not.toBe(value);
}

export function toBeCloseTo(expression: number, value: number, numDigits: number = 2): void {
    expect(expression).toBeCloseTo(value, numDigits);
}

export function truthy(expression: boolean): void {
    expect(expression).toBeTruthy();
}

export function falsy(expression: boolean): void {
    expect(expression).toBeFalsy();
}

export function toThrow(fn: Function): void {
    expect(fn).toThrow();
}

export function toBeGreaterThan(expression: number, value: number): void {
    expect(expression).toBeGreaterThan(value);
}

export function toBeGreaterThanOrEqual(expression: number, value: number): void {
    expect(expression).toBeGreaterThanOrEqual(value);
}

export function toBeLessThan(expression: number, value: number): void {
    expect(expression).toBeLessThan(value);
}

export function toBeLessThanOrEqual(expression: number, value: number): void {
    expect(expression).toBeLessThanOrEqual(value);
}


export function toBeNull(expression: any): void {
    expect(expression).toBeNull();
}

export function toBeUndefined(expression: any): void {
    expect(expression).toBeUndefined();
}

export function toContain<t>(expression: Array<t>, value: any): void {
    expect(expression).toContain(value);
}

export function toHaveLength<t>(expression: Array<t>, length: number): void {
    expect(expression).toHaveLength(length);
}

