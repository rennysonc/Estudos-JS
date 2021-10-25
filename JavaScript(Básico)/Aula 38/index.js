function random(min, max) {
    const nome = Math.random * (max - min) + min;
    return Math.floor(nome)
}

const min = 1
const max = 50;
let rand = random(1, 50);

// while(rand !== 10){
//     rand = random(min, max);
//     console.log(rand);
// }

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);
    