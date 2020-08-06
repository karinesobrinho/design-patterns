/*Observer
pattern popular em aplicacoes js, a instancia (subscriber) mantem uma colecao
de objetos (observers) e notifica todos eles quando ocorrem mudancas no estado
*/

class observable {
    constructor(){
        this.observable = []
    }
    subscribe(fn){
        this.observable.push(fn)
    }
    notify(data){
        this.observable.forEach(fn => fn(data))
    }
    unsubscribe(fn){
        this.observable = this.observable.filter(obs => obs !== fn)
    }
}

const o = new observable()

const logData1 = data => console.log(`Subscribe 1 ${data}`)
const logData2 = data => console.log(`Subscribe 2 ${data}`)
const logData3 = data => console.log(`subscribe 3 ${data}`)

o.subscribe(logData1)
o.subscribe(logData2)
o.subscribe(logData3)

o.notify('notification 1')

o.unsubscribe(logData2)

o.notify('notification 2')