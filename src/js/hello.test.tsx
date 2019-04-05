import { hello, add } from "./hello";

describe("hello", () => {
    it("should displays hello string", () => {
        expect(hello()).toBe("hello");
    });
});

describe("add", () => {
    it("should display the correct sum", () => {
        expect(add(1, 2)).toBe(3);
        expect(add(10, 35)).toBe(45);
    });
});
