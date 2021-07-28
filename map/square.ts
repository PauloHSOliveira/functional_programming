
const numbers: Array<number> = [2,5,10]

const square = (x:number) => {
    return x * x
}

const result = numbers.map(square)

console.log(result)