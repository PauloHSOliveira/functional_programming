const calculate = (fn:Function, x:number, y:number) => {
    return fn(x,y)
}

const sum = (x:number,y:number) => x+y
const subtraction = (x:number, y:number) => x-y
const multi = (x:number, y:number) => x*y
const division = (x:number, y:number) => x/y

console.log(calculate(sum,2,3))
console.log(calculate(subtraction,10,3))
console.log(calculate(multi,5,4))
console.log(calculate(division,150,2))
