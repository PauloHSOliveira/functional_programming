const createMessage = (message1:string) => (message2:string) => `${message1} ${message2}`

const hello = createMessage('Hello')

console.log(hello('word'))
console.log(hello('Paulo'))