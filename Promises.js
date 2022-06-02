const myPromise2 = new Promise((resolve, reject) => {

  const nameReceived = null

  if (typeof nameReceived === 'string') {
    resolve(`Nome recebido (${nameReceived})`)
  }else{
    reject('Nome não foi recebido')
  }
})
//pq qualquer coisa entra no then???
myPromise.then((data)=>{
  console.log(data)
})


const myPromise2 = new Promise((resolve, reject) => {

  const nameReceived = 'teste'

  if (typeof nameReceived === 'string') {
    resolve(`Nome recebido (${nameReceived})`)
  }else{
    reject('Nome não foi recebido')
  }
})


//o argumento da função resolve é o que vai ser retornado no then
myPromise2.then((data)=>{
  return data.toLowerCase()
}).then((stringModificada) => {
  console.log(stringModificada)
})

const myPromise3 = new Promise((resolve, reject) => {

  const nameReceived = 'teste'

  if (typeof nameReceived === 'string') {
    resolve(`Nome recebido (${nameReceived})`)
  }else{
    reject('Nome não foi recebido')
  }
})

myPromise3
  .then((data)=>{
    console.log(data)

}).catch(()=>{
  
})

