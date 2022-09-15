// const operations = ['multiply', 'add', 'divide']
type Operation = 'multiply'| 'add'| 'divide'
type Result = number

const calculator = (a: number, b: number, op: Operation): Result => {
    // if (!operations.includes(op)){
    //     console.log('This op is not defined');
    // }
    
    // !operations.includes(op) && console.log('Op is not defined');

    if(op === 'multiply') return a * b
    if(op === 'add') return a + b
    if(op == 'divide'){ 
        if(b === 0 ) throw new Error('Cant divide by 0!')
        return a/b
    }

    throw new Error('Operation is not valid')
}

console.log(process.argv);


const result = calculator(1, 3, 'add')
console.log(result);
