const compose = (f:Function, g: Function) => {
    return (x:string) => {
        return f(g(x))
    }
}

const toUpperCase = (x:string) => x.toUpperCase()
const addedExclaim = (x:string) => `${x}!!`

const hello = compose(toUpperCase,addedExclaim)

console.log(hello('hey guys'))

export {

}