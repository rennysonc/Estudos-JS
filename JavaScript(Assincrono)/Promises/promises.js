function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)+min)
}

function esperaAi(mensagem,tempo){
    
    return new Promise((resolve,reject)=>{
        if(typeof mensagem !== 'string')reject(false)
        setTimeout(()=>{
            console.log(mensagem);
            resolve(mensagem);
        },tempo);
    })
    
    
}

esperaAi('Frase 1',aleatorio(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi(22222,aleatorio(1,3))
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 3',aleatorio(1,3))
}).then(resposta => {
    console.log(resposta)
}).then(()=> {
    console.log('Programa Encerrado')
})
.catch(e =>{
    console.log('Erro no BD:',e)
})

console.log('Iniciando...')