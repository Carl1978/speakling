import { add } from "./add";

test("basic", () => {
    expect(add()).toBe(0);
});

test("basic again", () => {
    expect(add(1, 2)).toBe(3);
});

test("basic 3rd", () => {
    expect(add(1, 2, 3)).toBe(6);
});
