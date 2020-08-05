/* Singleton
Tem por objetivo criar uma unica instancia de uma funcao construtora e 
retorna-la toda vez que for necessario utiliza-la
*/ 

function Pessoa(){
     //instance é uma prop que confirma se foi instanciada ou n
     if (!Pessoa.instance){
        return Pessoa.instance = this
     }
     return Pessoa.instance
}

const p = Pessoa.call({name:'joao'})

const p2 = Pessoa.call({name: 'outro nome'})

console.log(p, p2) //name nao muda pq ja foi instanciado