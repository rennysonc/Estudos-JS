// IIFE -> Immediately Invoked Function expression

(function(idade,peso,altura){
    const nome = 'Rennyson'
    const sobrenome = 'Cavalcante'
    function falaOi(nome){
        return nome + ' ' + sobrenome
    }
    function falaNome(){
        console.log(falaOi('Rennyson'))
    }
    falaNome();
    console.log(idade,peso,altura)
})(30,80,1.90)

