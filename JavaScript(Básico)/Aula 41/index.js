function somaDois(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser numeros')
    }
    return x+y;
}
try{
    console.log(somaDois(1,2))
    console.log(somaDois('1',2))
}catch(e){
    console.log(e)
}
