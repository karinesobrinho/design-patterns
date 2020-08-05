/*Factory
Todas as funcoes que retornam um objeto sem a necessidade de chama-los com o new */

function person() {
    return{
        name: 'joao',
        lastName: 'da silva',
    }
}

const user = person()

console.log(user)