let score: number | string = 33
score = 44
score = "73"

type User1 = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let dishita: User1 | Admin = {name: "dishita", id: 58}
dishita = {username: "db", id: 58}

// function getDbId(id: number | string){
//     //making some API calls
//     console.log('DB id is: ${id}'); //to print any variable
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    if (typeof id === "string"){
        id.toLowerCase()
    }
}

//array

const data: number[] = [1,2,3]
const data1: string[] = ["1","2","3"]

const data3: (string | number | boolean)[] = [2,true,"yes"]

let pi:3.14 = 3.14 //literal type assignment
//pi = 3.145  gives error

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
//seatAllotment = "crew" non assignable
