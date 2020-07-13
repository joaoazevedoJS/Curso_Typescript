"use strict";
/*
 *  1 - É possivel mesclar interface, mas com types não
 */
var personInterface = {
    name: 'João Azevedo',
    age: 20
};
console.log(personInterface);
// type ObjType = { age: number }
var personType = {
    name: 'João'
};
console.log(personType);
var personObjMap = {
    firstname: "João",
    middlename: "Victor",
    lastname: "Azevedo"
};
console.log(personObjMap);
// Já com a interface não podemos fazer isso.
// interface ObjMapInterface { [key in Keys]: string }
//# sourceMappingURL=TypeVsInterface.js.map