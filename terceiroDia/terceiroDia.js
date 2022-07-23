let area;
let linguagem;
let escolha;
let tecnologias = [];

do {
    area = prompt(`Qual área pretende seguir?
    1. Front-End
    2. Back-End`);
} while ((area === '' || area === null) || area != 1 && area != 2)

if (area == 1) {
    do {
        linguagem = prompt(`Qual tecnologia pretende aprender?
        1. React
        2. Vue`);
    } while (linguagem === '' || linguagem === null || linguagem != 1 && linguagem != 2)

    if (linguagem == 1) {
        linguagem = "React";
    } else {
        linguagem = "Vue";
    }
    
} else {
    do {
        linguagem = prompt(`Qual tecnologia pretende aprender?
        1. C#
        2. Java`);
    } while (linguagem === '' || linguagem === null || linguagem != 1 && linguagem != 2)

    if (linguagem == 1) {
        linguagem = "C#";
    } else {
        linguagem = "Java";
    }
}

do {
    escolha = prompt(`O quê você pretende fazer?
    1. Seguir se especializando em ${linguagem}
    2. Seguir se desenvolvendo para se tornar Fullstack`);
} while (escolha === '' || escolha === null || escolha != 1 && escolha != 2)

if (escolha == 1) {
    alert(`Continue estudando e logo se tornará um especialista em ${linguagem}!`)
} else {
    alert(`É muito perigoso seguir sozinho, pegue esta espada. Se torne Fullstack!`);
}

do {
    do {
        tecnologias.push(prompt("Qual outra tecnologia você deseja conhecer?"));
    } while (tecnologias === '' || tecnologias === null);

    alert(`Tecnologias com grande perspectiva de mercado: ${tecnologias}`);    
} while (confirm("Deseja preencher alguma outra tecnologia?"));
