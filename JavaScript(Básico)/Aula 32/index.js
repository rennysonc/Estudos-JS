const pessoa = {
    nome: 'Rennyson',
    sobrenome: 'Cavalcante',
    idade: 19,
    endereco: {
        rua: 'Avenida Programação',
        numero: 9999
    }
};

// Atribuição via desestruturação
const {nome, sobrenome, ...resto} = pessoa
console.log(nome, resto)