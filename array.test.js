const array =require('./array');
test("testing array check",()=>{
    expect(array.checkElement(23)).toBe(false);
    });
    test("testing array check",()=>{
        expect(array.checkElement(3)).toBe(true);
        });
    
  