function numero(num1){
    if(num1 % 3 === 0 && num1 % 5 === 0){
        return 'FizzBuzz'
    }else if(num1 % 3 === 0){
        return 'Fizz'
    }else if(num1 % 5 === 0){
        return 'Buzz'
    }else if(typeof num1 === 'number'){
        return num1
    }
}

for (let i = 0; i <= 100; i++){
    console.log(numero(i))
}