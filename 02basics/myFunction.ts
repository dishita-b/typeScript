function addTwo(num: number){
    //num.toUpperCase()
    //return num+2
    return "hello"
}

function addTwo1(num: number): number{
    //num.toUpperCase()
    return num+2
    //return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signupUser(name: string, email:string, isPaid: boolean){}

let loginUser = (name:string, email:string, isPaid: boolean = false) => {}


addTwo(5)
getUpper("dishita")
signupUser("dishita","dishita900@email.com",false)
loginUser("h","h@h.com")

// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {     //if neither undefined or void then must return value
    return " "
} 

//const heros = ["thor", "spiderman", "ironman"]
const heros = [1, 2, 3]
heros.map((hero): string=> {   //ts (CONTEXT SWITCH) is smart enough to switch the datatype as per need
    return 'hero is ${hero}'
})

function consoleError(errMsg: string): void{ //whatever value is passed we just put it to the console
    console.log(errMsg);    // will not return anything
}

function handleError(errmsg: string): never{ //some func never return a value look to the documentation
    throw new Error(errmsg);  //intentional crash we are doing In a return type,the function throws an exception or terminates execution of the program    
}

export{}
