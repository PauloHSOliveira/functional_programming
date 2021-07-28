type OPERATORS = 'LARGER' | 'SMALL' | 'EQUAL'
type PersonTypes = {
    name:string,
    age: number,
    salary: number
}

const persons:PersonTypes[] = [
    {
        name:'Paulo',
        age: 22,
        salary: 7800
    },
    {
        name:'Carlos',
        age: 30,
        salary: 2000
    },
    {
        name:'Marcelo',
        age: 19,
        salary: 1500
    }
]

const getItem = (value:number, operator:OPERATORS, comparator:number) => {
    if(operator === 'LARGER') return value > comparator
    if(operator === 'SMALL') return value < comparator
    if(operator === 'EQUAL') return value === comparator
}

const byAge = persons.filter(person => getItem(person.age, 'LARGER', 20))
const bySalary = persons.filter(person => getItem(person.salary, 'LARGER', 5000))

console.log(byAge)
console.log(bySalary)

const byAge2 = persons.filter(person => getItem(person.age, 'SMALL', 22))
const bySalary2 = persons.filter(person => getItem(person.salary, 'SMALL',2000))

console.log(byAge2)
console.log(bySalary2)

const byAge3 = persons.filter(person => getItem(person.age, 'EQUAL',22))
const bySalary3 = persons.filter(person => getItem(person.salary,'EQUAL',1500))

console.log(byAge3)
console.log(bySalary3)

export {}