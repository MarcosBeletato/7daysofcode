let nome;
let idade; 
let linguagem;
let resp;

do {
    nome = prompt("Qual seu nome?");
} while (nome === '' || nome === null)

do {
    idade = prompt("Quantos anos você tem?");
} while (idade === '' || idade === null)

do {
    linguagem = prompt("Qual linguagem de programação você está estudando?");
} while (linguagem === '' || linguagem === null)

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

do {
    resp = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
} while (resp != 1 && resp != 2 || resp === '' || resp === null);

if (resp == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
} 