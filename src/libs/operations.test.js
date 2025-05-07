import { describe, expect, it } from "vitest";
import { subtract, sum } from "./operations";

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('adds 2 + 2 to equal 4', () => {
        expect(sum(2, 2)).toBe(4);
    });

    it('adds 0 + 2 to equal 2', () => {
        expect(sum(0, 2)).toBe(2);
    });
});

describe('subtract', () => {
    it('subtract 1 - 2 to equal -1', () => {
        expect(subtract(1, 2)).toBe(-1);
    });

    it('subtract 2 - 2 to equal 0', () => {
        expect(subtract(2, 2)).toBe(0);
    });

    it('subtract 0 - 2 to equal -2', () => {
        expect(subtract(0, 2)).toBe(-2);
    });
})