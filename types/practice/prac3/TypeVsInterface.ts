/*
 *  1 - É possivel mesclar interface, mas com types não
 */

interface ObjInterface { name: string }
interface ObjInterface { age: number }

const personInterface: ObjInterface = {
  name: 'João Azevedo',
  age: 20
}

console.log(personInterface)

// ao tentar mesclar um type isso resultara em um erro

type ObjType = { name: string }
// type ObjType = { age: number }

const personType: ObjType = {
  name: 'João'
}

console.log(personType)

/*
 *  2 - Type pode se usado propriedades mapeadas
 */

type Keys = "firstname" | "middlename" | "lastname"

type ObjMap = { [Key in Keys]: string }

const personObjMap: ObjMap = {
  firstname: "João",
  middlename: "Victor",
  lastname: "Azevedo"
}

console.log(personObjMap)

// Já com a interface não podemos fazer isso.
// interface ObjMapInterface { [key in Keys]: string }
