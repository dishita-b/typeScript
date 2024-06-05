// if there is a func ({}) with parameters inside curly braces its a obj
//object
const User ={
    name: "dishita",
    email: "d@gmail.com",
    isActive: true
} /*not using this too much, case of obj through func
ie pass on these obj into a func or return some obj trgh the fnc*/

function createUser({name: string, isPaid: boolean}){
    //no return
}
//createUser() cannot use this as properties missing

createUser({name: "hitesh", isPaid: false})
//can also write in this manner

let newUser = {name: "hitesh", isPaid: false, email: "d@gmail.com"} //weird functions*/
createUser(newUser)


function createCourse():{name: string, price: number}{  
    return {name: "angular", price: 399} // cannnot add email here as func overload
}
/*createCourse is the func name () is the func parameter u pass on
{} is the return type
and {} is a defination
to note the first{} can be in and out of the () ie return type..different way of exprs */

//------Type Alisas-----/

type User1 ={
    name: string;
    email: string;
    isActive: boolean
}

//function createUser1(user: User1):{}  we didnt have a specified return type so this was error free

function createUser1(user: User1): User1{ 
    return {name: "", email: "", isActive: true}
}

createUser1({name: "", email: "", isActive: true})

//Documentation : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases





export{}