console.log("ciao sono typescript")
const x ="mario"

const n: number = 50

const firstName : string = 'Stefano'

const addition = (p1,p2) =>{ 
    return p1 + p2
    // any
}
console.log(addition)

// meglio tipizzare 
const addition2 = (p1 :number ,p2:number ) =>{ 
    return p1 + p2
    
}
console.log(addition2(50,50))

const sayHello = (name: string, prefix?: string) =>{
    // parametri opzionali vanno come ultimi
    return (prefix || "Ciao") + ' ' + name
}
console.log(sayHello('Giangiorgio', 'Buonasera'))
console.log(sayHello('Stefano'))

// si puo fare amche cosi
const sayHello2 = (name: string, prefix: string = 'Ciao') => {
    // parametri opzionali vanno come ultimi
    return prefix  + ' ' + name
}
console.log(sayHello2('Giangiorgio', 'Buonasera'))
console.log(sayHello2('Stefano'))

// Type Alias 

type MyType = string | number
let a : MyType = '50'

// oggetti

const specialDog = {
    name:'Pluto',
    brand:'Disney',
    furColor:'Blonde',
    age:5,
    canFly:true,
    species:{
        name:'Dog',
        breed:'Golden Retriever',
    },
    abilities : ['Bark', 'Eat', 'Play', 'Sleep'],
    bark:() => {
        return 'BAU'
    }
}
const boh = specialDog.abilities.map((ab) => {
    return ab.length
})
    
