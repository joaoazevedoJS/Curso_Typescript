// array
// let hobbies = ["Programar", "Estudar"]
let hobbies: any[] = ["Programar", "Estudar"]

console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, '200', 300]; // error array string

// error, não é um array, como foi declarado como array ele só aceitar valores
// dentro do array
// hobbies = 100;

console.log(hobbies)
