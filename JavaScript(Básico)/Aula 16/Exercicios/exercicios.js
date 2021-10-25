const numero = prompt('Digite um número:');
const numeroTitulo = document.getElementById('numero-titulo');
const textoTitulo = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
textoTitulo.innerHTML = `<p>Se</p>`;