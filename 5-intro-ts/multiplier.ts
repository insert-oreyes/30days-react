const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a*b);
}

function parseArguments(args) {
    if (args.length !== 4)
        throw new Error('Wrong num of arguments');

    const firstNumber = Number(args[2]);
    const secondNumber = Number(args[3]);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return [firstNumber, secondNumber];
    } else {
        throw new Error('Provided values were not numbers');
    }
}

const clearnArguments = parseArguments(process.argv)


const a: number = Number(clearnArguments[0])
const b: number = Number(clearnArguments[1])


multiplicator(a, b, `Multiplicated ${a} and ${b} and result is:`)
