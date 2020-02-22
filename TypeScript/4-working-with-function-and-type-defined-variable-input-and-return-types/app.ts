function normal_function(var1: string, var2?: number): string {
    return 'Hello world!';
}

console.log(normal_function('hello demo', 100));
console.log(normal_function('hello demo'));

function void_function(var1: string): void {
    console.log(var1);
}

console.log(void_function('Hello world - void function test'));

const const_func_ano = (message: string): void => {
    console.log(message);
};
const_func_ano('This is a test const ano function');

function final_function(var1: string, var2: string = 'hello world!', var3?: number): void {
    console.log('var1:', var1);
    console.log('var2:', var2);

    if (var3 !== undefined) {
        console.log('var3:', var3);
    }
}

final_function('Test var 1');
final_function('Test var 1,2,3', 'Hello world again', 100.0);