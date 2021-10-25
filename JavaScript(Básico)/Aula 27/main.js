function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}
function formatarData(data) {
    const dia = data.getDay();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date()
const dataBrasil = formatarData(data);
console.log(dataBrasil)