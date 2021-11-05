function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)+min)
}

function esperaAi(mensagem,tempo){
    
    return new Promise((resolve,reject)=>{
        if(typeof mensagem !== 'string'){
        reject('Erro')
        return;
        }
        setTimeout(()=>{
            
            resolve(mensagem.toUpperCase() +'- Passei na promise');
            return;
        },tempo);
    })
}

//  Promise.all promise.race promise.resolve e promise.reject

function baixaPagina(){
    const cache = true;

    if(cache){
        return Promise.resolve('Pagina em cache')
    }else{
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
.then(dadosPagina=>{
    console.log(dadosPagina);
})
.catch(e => console.log('Erro',e))