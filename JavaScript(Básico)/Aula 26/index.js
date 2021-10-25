const pontuacaoUsuario = 1001;
const nivelUser = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal';
const corUser = null;
const corPadrao = corUser || 'Preta';
console.log(nivelUser, corPadrao);
//if (pontuacaoUsuario >= 1000){
 //   console.log('Usuario VIP');
//} else {
//    console.log('Usuario Normal');
//}
