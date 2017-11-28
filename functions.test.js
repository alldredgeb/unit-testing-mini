const functions = require('./functions');

test("The returnTwo function returns 2", ()=>{
  let result = functions.returnTwo();

  expect(result).toBe(2);
})

describe("Greetings Function", ()=>{
  test("Greets James Appropriately", ()=>{
    let name = "James";

    let result = functions.greeting(name);
    
    expect(result).toBe("Hello, James");
  })

  test("Greets Jill Appropriately", ()=>{
    let name = "Jill";
    
    let result = functions.greeting(name);
        
    expect(result).toBe("Hello, Jill");
  })
})

describe("Add Function", ()=>{
  test("Adds 1 and 2 to get 3", ()=>{
    let num1=1;
    let num2=2;

    let result = functions.add(num1, num2);

    expect(result).toBeCloseTo(3);
  })

  test("Adds 5 and 9 to get 14", ()=>{
    let num1=5;
    let num2=9;

    let result = functions.add(num1, num2);
    
    expect(result).toBeCloseTo(14);
  })
})

describe("Subtract Function", ()=>{
  text("Subtract 5 from 16 to get 11", ()=>{
    let num1=5;
    let num2=16;

    let result = functions.subtract(num1, num2);
    
    expect(result).toBeCloseTo(11);
  })
})

describe("Multiply Function", ()=>{
  test("Multiply 5 and 0 to get 0", ()=>{
    let num1=5;
    let num2=0;

    let result = functions.multiply(num1, num2);

    expect(result).toBe(0);
  })

  test("Multiply 5 and 9 to get 45", ()=>{
    let num1=5;
    let num2=9;

    let result = functions.multiply(num1, num2);

    expect(result).toBe(49);
  })
})

describe("Division Function", ()=>{
  test("Divide 55 by 11 to get 5", ()=>{
    let num1=55;
    let num2=11;

    let result = functions.divide(num1, num2);

    expect(result).toBe(5);
  })

  test("Divide 55 by 1 to get 55", ()=>{
    let num1=55;
    let num2=1;

    let result = functions.divide(num1, num2);

    expect(result).toBe(55);
  })
})