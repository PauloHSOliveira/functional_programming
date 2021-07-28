type PersonsTypes = {
    firstName:string,
    lastName:string,
    age:number,
    email:string
}

const persons:PersonsTypes[] = [
    {
        firstName:'Paulo',
        lastName: 'Oliveira',
        age: 22,
        email: 'paulooliveira@teste.com'
    },
    {
        firstName:'Kethlim',
        lastName: 'Lima',
        age: 20,
        email: 'kethlimlima@teste.com'
    }
]

const returnPersonData = (person: PersonsTypes, key:string) => {
    // @ts-ignore
    return person[key]
}


const setFullName = (firstName:string, lastName:string) => {
    return `${firstName} ${lastName}`
}

const personsFirstName = persons.map(person => returnPersonData(person,'firstName'))
const personsLastName = persons.map(person => returnPersonData(person,'lastName'))
const personsAge = persons.map(person => returnPersonData(person,'age'))
const personsEmail = persons.map(person =>  returnPersonData(person,'email'))
const personsFullName = persons.map(person => setFullName(returnPersonData(person,'firstName'),returnPersonData(person,'lastName')))

console.log(personsFirstName)
console.log(personsLastName)
console.log(personsAge)
console.log(personsEmail)
console.log(personsFullName)

export {
    
}