function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleString('pt-BR'), {
        hour: '2-digit',
        minutes: '2-digit',
        seconds: '2-digit',
        hour12: false
    }
}

const hora = retornaHora(11)
console.log(hora)