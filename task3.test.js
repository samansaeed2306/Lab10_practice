const {power,round,ceiling}=require('./task3.js');
test ("test case power",()=>{
    expect(power(4,3)).toBe(64)
});
test ("test case ceiling",()=>{
    expect(ceiling(1.3)).toBe(2)
});
test ("test case round",()=>{
    expect(round(2.3)).toBe(2)
});