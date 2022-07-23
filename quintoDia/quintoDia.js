const frutas = [];
const laticinios = [];
const congelados = [];
const doces = [];
const naoPereciveis = [];
let aux;
let classificacao;

do {
  do {
    aux = prompt('Qual comida deseja adicionar?');
  } while (aux === '' || aux === null)
  
  do {
    classificacao = Number(prompt(`Em qual categoria essa comida se encaixa?
    1 - Frutas
    2 - Laticínios
    3 - Congelados
    4 - Doces
    5 - Não-perecíveis`));
  } while (classificacao < 1 || classificacao > 5)
    
  switch (classificacao) {
    case 1:
      frutas.push(aux);
      break;
    case 2:
      laticinios.push(aux);
      break;
    case 3:
      congelados.push(aux);
      break;
    case 4:
      doces.push(aux);
      break;
    case 5:
      naoPereciveis.push(aux);
      break;
  }
} while (confirm('Deseja adicionar outro produto?'))

alert(`Lista de compras
Frutas: ${frutas}
Laticínios: ${laticinios}
Congelados: ${congelados}
Doces: ${doces}
Não-perecíveis: ${naoPereciveis}`)