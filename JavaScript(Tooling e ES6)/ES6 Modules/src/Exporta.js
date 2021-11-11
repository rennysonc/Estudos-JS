 const nome = 'Rennyson';
 const sobrenome = 'Cavalcante';
 const idade = 19;


export function soma(x, y) {
 return x + y;
}
export default class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}