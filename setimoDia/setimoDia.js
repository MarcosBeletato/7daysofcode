function soma(primeiroNumero, segundoNumero) {
  let opSoma = primeiroNumero + segundoNumero;
  return alert(`O resultado da soma é: ${opSoma}`);
}

function subtracao(primeiroNumero, segundoNumero) {
  let opSubtracao = primeiroNumero - segundoNumero;
  return alert(`O resultado da subtração é: ${opSubtracao}`);
}

function multiplicacao(primeiroNumero, segundoNumero) {
  let opMultiplicacao = primeiroNumero * segundoNumero;
  return alert (`O resultado da multiplicação é: ${opMultiplicacao}`);
}

function divisao(primeiroNumero, segundoNumero) {
  if (segundoNumero == 0) {
    alert('Não é possível realizar divisão por 0');
  } else {
    let opDivisao = primeiroNumero / segundoNumero;
    return alert(`O resultado da divisão é ${opDivisao}`);
  }
}

let escolhaOperacao;
let primeiroNumero;
let segundoNumero;

do {
  do {
    escolhaOperacao = prompt(`Qual operação deseja realizar?
    1 - Soma
    2 - Subtração
    3 - Multiplicação
    4 - Divisão
    5 - Sair`)
  } while (escolhaOperacao < 1 || escolhaOperacao > 5 || escolhaOperacao === '' || escolhaOperacao === null)

  if (escolhaOperacao != 5) {
    do {
      primeiroNumero = Number(prompt('Digite o primeiro número.'));
    } while (primeiroNumero === '' || primeiroNumero === null)

    do {
      segundoNumero = Number(prompt('Digite o segundo número.'));
    } while (segundoNumero === '' || segundoNumero === null)
  }

  switch (escolhaOperacao) {
    case '1':
      soma(primeiroNumero, segundoNumero);
      break;
    case '2':
      subtracao(primeiroNumero, segundoNumero);
      break;
    case '3':
      multiplicacao(primeiroNumero, segundoNumero);
      break;
    case '4':
      divisao(primeiroNumero, segundoNumero);
      break;
    case 5:
      break;
  }
} while (escolhaOperacao != 5)
