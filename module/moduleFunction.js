/* Module
pattern que possibilita organizarmos melhor o nosso codigo sem a necessidade de expor
variaveis globais 
*/

let name = 'default'

function getName() {
    return name
}

function setName(newName){
    name = newName
}

module.exports = {
    getName, 
    setName
}