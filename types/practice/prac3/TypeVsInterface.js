"use strict";
/*
 *  1 - É possivel mesclar interface, mas com types não
 */
const personInterface = {
    name: 'João Azevedo',
    age: 20
};
console.log(personInterface);
// type ObjType = { age: number }
const personType = {
    name: 'João'
};
console.log(personType);
const personObjMap = {
    firstname: "João",
    middlename: "Victor",
    lastname: "Azevedo"
};
console.log(personObjMap);
// Já com a interface não podemos fazer isso.
// interface ObjMapInterface { [key in Keys]: string }
//# sourceMappingURL=TypeVsInterface.js.map