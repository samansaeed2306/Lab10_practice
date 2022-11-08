const sum=require('./sum');




test("testing sum",()=>{
expect(sum.sum(0,3)).toBe(3);
});

test("testing diff",()=>{
    expect(sum.diff(3,0)).toBe(3);
    });

    test("testing div",()=>{
        expect(sum.div(3,0)).toBe("not defined");
        });

        test("testing div",()=>{
            expect(sum.div(9,3)).toBe(3);
            });
    

        test("testing product",()=>{
            expect(sum.prod(3,0)).toBe(0);
            });
