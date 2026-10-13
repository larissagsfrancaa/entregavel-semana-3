
/*
  INTRODUÇÃO AO JAVASCRIPT — SEMANA 03
  Aluna: Larissa França
*/

// ==========================================
// BLOCO 1 — FUNDAMENTOS E VARIÁVEIS
// ==========================================

console.log("===== BLOCO 1 =====");

// 1. Variável pontos
let pontos = 0;
console.log("Pontos iniciais:", pontos);

pontos = pontos + 10;
console.log("Pontos após adicionar 10:", pontos);

// 2. Constante e tentativa de reatribuição
const MAX_PONTOS = 100;
console.log("Máximo de pontos:", MAX_PONTOS);

try {
  MAX_PONTOS = 150;
} catch (erro) {
  console.log("Erro esperado:", erro.name);
  console.log("Uma constante não pode receber outro valor.");
}

// 3. Tipos primitivos
const texto = "JavaScript";
const numero = 10;
const booleano = true;
let indefinido;
const nulo = null;

console.log("String:", texto, typeof texto);
console.log("Number:", numero, typeof numero);
console.log("Boolean:", booleano, typeof booleano);
console.log("Undefined:", indefinido, typeof indefinido);
console.log("Null:", nulo, typeof nulo);

// typeof null retorna "object" por uma particularidade histórica.

// 4. Template Literal e concatenação
const nome = "Larissa";
const curso = "Engenharia de Software";

const fraseTemplate =
  `Meu nome é ${nome} e curso ${curso}.`;

const fraseConcatenada =
  "Meu nome é " + nome + " e curso " + curso + ".";

console.log(fraseTemplate);
console.log(fraseConcatenada);


// ==========================================
// BLOCO 2 — FUNÇÕES
// ==========================================

console.log("===== BLOCO 2 =====");

// 1. Function declaration e hoisting
console.log("Maior de idade:", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

// 2. Function expression e ReferenceError
try {
  console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
  console.log("Erro esperado:", erro.name);
  console.log("A expressão ainda não foi inicializada.");
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};

console.log(
  "Expression após declaração:",
  ehMaiorDeIdadeExpressao(20)
);

// 3. Função dobro nas três formas

function dobroDeclarado(numero) {
  return numero * 2;
}

const dobroExpressao = function (numero) {
  return numero * 2;
};

const dobroArrow = (numero) => numero * 2;

console.log("Dobro declarado:", dobroDeclarado(5));
console.log("Dobro expression:", dobroExpressao(5));
console.log("Dobro arrow:", dobroArrow(5));

// 4. Parâmetro com valor padrão
function dobroComPadrao(n = 1) {
  return n * 2;
}

console.log("Dobro sem argumento:", dobroComPadrao());


// ==========================================
// BLOCO 3 — CONTROLE DE FLUXO
// ==========================================

console.log("===== BLOCO 3 =====");

// 1. Classificar nota com if/else
function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log("Nota 8:", classificarNota(8));
console.log("Nota 4:", classificarNota(4));

// 2. Semáforo com switch
const corSemaforo = "amarelo";

switch (corSemaforo) {
  case "verde":
    console.log("Siga");
    break;

  case "amarelo":
    console.log("Atenção");
    break;

  case "vermelho":
    console.log("Pare");
    break;

  default:
    console.log("Cor inválida");
}

// 3. Tabuada do 5 com for
console.log("Tabuada do 5:");

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 4. Contagem regressiva com while
console.log("Contagem regressiva:");

let contador = 5;

while (contador >= 1) {
  console.log(contador);
  contador--;
}

// 5. Ímpares de 1 a 20 com for
console.log("Ímpares com for:");

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 6. Ímpares de 1 a 20 com while
console.log("Ímpares com while:");

let numeroWhile = 1;

while (numeroWhile <= 20) {
  if (numeroWhile % 2 !== 0) {
    console.log(numeroWhile);
  }

  numeroWhile++;
}

// 7. Dia da semana com switch
// Convenção: 1 = domingo e 7 = sábado.

function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";

    case 2:
      return "Segunda-feira";

    case 3:
      return "Terça-feira";

    case 4:
      return "Quarta-feira";

    case 5:
      return "Quinta-feira";

    case 6:
      return "Sexta-feira";

    case 7:
      return "Sábado";

    default:
      return "Número inválido";
  }
}

console.log("Dia 3:", diaDaSemana(3));
console.log("Dia 6:", diaDaSemana(6));
console.log("Dia 9:", diaDaSemana(9));

console.log("===== FIM DA ATIVIDADE =====");
