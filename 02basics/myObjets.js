"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// if there is a func ({}) with parameters inside curly braces its a obj
//object
var User = {
    name: "dishita",
    email: "d@gmail.com",
    isActive: true
}; /*not using this too much, case of obj through func
ie pass on these obj into a func or return some obj trgh the fnc*/
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//createUser() cannot use this as properties missing
createUser({ name: "hitesh", isPaid: false });
//can also write in this manner
var newUser = { name: "hitesh", isPaid: false, email: "d@gmail.com" }; //weird functions*/
createUser(newUser);
function createCourse() {
    return { name: "angular", price: 399 }; // cannnot add email here as func overload
}
