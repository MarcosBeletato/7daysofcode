const frutas = [];
const laticinios = [];
const congelados = [];
const doces = [];
const naoPereciveis = [];
let aux;
let produto;
let classificacao;

function mostraListas() {
  alert(`Lista de compras
  Frutas: ${frutas}
  Laticínios: ${laticinios}
  Congelados: ${congelados}
  Doces: ${doces}
  Não-perecíveis: ${naoPereciveis}`);
}

do {
  do {
    aux = prompt(`O que deseja fazer?
    1. Adicionar produto
    2. Remover produto`);
  } while (aux != 1 && aux != 2 || aux === '' || aux === null)
  
  if (aux == 1) {
    mostraListas();

    do {
      produto = prompt('Digite o nome do produto:');
    } while (produto === '' || produto === null)
    
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
        frutas.push(produto);
        break;
      case 2:
        laticinios.push(produto);
        break;
      case 3:
        congelados.push(produto);
        break;
      case 4:
        doces.push(produto);
        break;
      case 5:
        naoPereciveis.push(produto);
        break;
    }
  } else {
    mostraListas();

    do {
      produto = prompt('Digite o nome do produto que deseja remover:');
    } while (produto === '' || produto === null)

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
        if (frutas.includes(produto) && frutas.length > 0) {
          frutas.splice(frutas.indexOf(produto), 1);
        } else {
          alert('Produto não encontrado!');
        }
        break;
      case 2:
        if (laticinios.includes(produto) && laticinios.length > 0) {
          laticinios.splice(laticinios.indexOf(produto), 1);
        } else {
          alert('Produto não encontrado!');
        }
        break;
      case 3:
        if (congelados.includes(produto) && congelados.length > 0) {
          congelados.splice(congelados.indexOf(produto), 1);
        } else {
          alert('Produto não encontrado!');
        }
        break;
      case 4:
        if (doces.includes(produto) && doces.length > 0) {
          doces.splice(doces.indexOf(produto), 1);
        } else {
          alert('Produto não encontrado!');
        }
        break;
      case 5:
        if (naoPereciveis.includes(produto) && naoPereciveis.length > 0) {
          naoPereciveis.splice(naoPereciveis.indexOf(produto), 1);
        } else {
          alert('Produto não encontrado!');
        }
        break;
    }
  }
} while (confirm('Deseja realizar alguma outra alteração?'))

mostraListas();