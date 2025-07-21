const { sum } = require("../Sum");


test("should return the sum of two number",()=>{
    const result = sum(3,7);
    expect(result).toBe(10);

});
