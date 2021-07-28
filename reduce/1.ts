const numbers = [1,2,3]

const sum = (x:number,y:number) => x + y
const multi = (x:number, y:number) => x*y

const _sum = numbers.reduce(sum, 0)
const _multi = numbers.reduce(multi, 0)

console.log(_sum)
console.log(_multi)

export {}