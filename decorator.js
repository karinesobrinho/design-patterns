/*Decorator
recebe uma outra funcao como parametro estende o seu comportamento sem 
modifica-la explicitamente 
*/

let loggedIn = false

function callIfAuthenticated(fn){
    return !!loggedIn && fn()
}

function soma(a ,b){
    return a + b
}

console.log(callIfAuthenticated(()=> soma(2, 3)))

loggedIn = true
console.log(callIfAuthenticated(()=> soma(2, 3)))

//so funciona se o loggedIn for true