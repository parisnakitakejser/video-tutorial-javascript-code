// Basic sample in node
let var1 = 'This can be changed!';
const var2 = 'Can\'t be changed';

// Basic string / number delcare
let x1 = 'a string';
let y1 = 1234;

let x2: string = 'a new string';
let y2: number = 4321;

// Basic function
function testFunction (): number {
    return 1234;
}

let z1 = testFunction();
let z2: number = testFunction();

// Basic unions types
let c: number | string;

c = 1234;
c = 'error string';

// end session function test
function newFuncTest(test_type: number | string): number | string {
    if (typeof(test_type) === "number") {
        return 1234 + test_type;
    } else {
        return 'Test type contain string: '+ test_type;
    }
}

const string_test = newFuncTest('Hello world!');
const number_test = newFuncTest(9876);
// const bool_test = newFuncTest(false); // This will failure!