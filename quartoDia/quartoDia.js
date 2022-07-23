do {
  let numero = Math.floor(Math.random() * 11);
  let tentativas = 3;
  let chute;

  do {

    do{
      chute = prompt('Tente adivinhar o número que estou pensando. Digite um valor de 0 - 10!');
    } while (chute < 0 || chute > 10)
    
    if (chute < numero) {
      alert(`O número é maior!
      Tentativas restantes: ${--tentativas}`);
    } else if (chute > numero) {
      alert(`O número é menor!
      Tentativas restantes: ${--tentativas}`);
    } else {
      alert('Você acertou! Parabéns!');
      break;
    }

    if (tentativas === 0) {
      alert(`Suas tentativas acabaram... O número era: ${numero}`);
      break;
    }

  } while (tentativas > 0)

} while (confirm('Deseja jogar novamente?'));