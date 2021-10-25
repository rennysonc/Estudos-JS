const pessoa = {
    nome: 'Rennyson',
    sobrenome: 'Cavalcante'
}

for(let kies in pessoa) {
    console.log(kies,pessoa[kies])
}
// for(let valor of nome){
//     console.log(valor)
// }

// nome.forEach(function(valor,indice,array){
//     console.log(valor,indice,array)
// });