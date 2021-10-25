//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60*60*24*1000;
//const data = new Date(0 + tresHoras + umDia);
//const data = new Date(2021, 8,); // ano, mês , dia hora, minuto, segundo , ms
const data = new Date();
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo , 6 - Sábado
//console.log(data.toString())
console.log(data)