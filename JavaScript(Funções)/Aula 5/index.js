function retornaFuncao(nome){
    const nome = 'Rennyson';
    return function(){
        return nome
    }
}

const funcao = retornaFuncao('Rennyson');
const funcao2 = retornaFuncao('cavalcante');
console.dir(funcao);
console.dir(funcao2);