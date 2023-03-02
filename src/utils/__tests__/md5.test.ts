import { describe, expect, test } from "@jest/globals";
import { md5 } from "../md5";

describe("md5 module", () => {
  test("md5 function", () => {
    const hashMD5 = md5("yannick");
    expect(hashMD5).toMatch("-5870000435617ff9853bceb-1fcc2b8d");
    expect(typeof hashMD5).toBe("string");

    const hashEven = md5("ya");
    expect(hashEven).toBe("4491ebf815992fb7-2a680041-32802101");
    const hashOdd = md5("yan");
    expect(hashOdd).toBe("-4eee895f1331377528e3d3cf-2e224409");
    const hashEmptyString = md5("");
    expect(hashEmptyString).toBe("-766468027985f30f-5d388a253a6ffcff");
  });
});
