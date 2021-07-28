const months =  ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ']

const monthsShortener = (previous:string, current:string) => {
    return  previous === ''? current : `${previous}/${current}`
}

const newMonths = months.reduce(monthsShortener,'')
console.log(newMonths)