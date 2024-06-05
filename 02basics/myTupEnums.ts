//const user: (string | number)[] = [1,"hc"]
let tUser: [string, number, boolean]

//tUser = [true, 1223, "fg"] gives error
tUser = ["db", 58, true]

let rgb: [number, string]

type Usertup = [number, string]

const newUser1: Usertup = [132, 'dishita@gmail.com']
newUser1[1] = "db.com"

//newUser1.push(true) error coz updated verion, in tutorial correct
