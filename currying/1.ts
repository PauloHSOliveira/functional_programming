const add = (x:number) => (y:number) => x + y
const addFive  = add(5)
const addSeven = add(7)
const addTen = add(100)

console.log(add(5)(10))

console.log(addFive(6))
console.log(addSeven(2))
console.log(addTen(21))