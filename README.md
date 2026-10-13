# Entregável de Desenvolvimento Web – Introdução ao JavaScript – Semana 03

## 📋 Sobre o Projeto
Este projeto apresenta a resolução dos desafios práticos propostos na aula de Introdução ao JavaScript (U3), cobrindo três blocos fundamentais de aprendizado: Variáveis e Tipos, Funções e Controle de Fluxo. 

Os códigos foram desenvolvidos utilizando as práticas modernas do **ES6+** e estruturados em um arquivo único chamado `app.js` para execução via Node.js ou console do navegador.

---

## 💻 Conteúdo do Projeto (`app.js`)

### Bloco 1 – Fundamentos e Variáveis
* **Declaração de Variável `let`:** Criação da variável `pontos` com valor inicial, adição de 10 unidades e exibição no console.
* **Uso de `const`:** Declaração da constante `MAX_PONTOS` com tentativa de reatribuição protegida por `try/catch`, acompanhada da explicação do erro gerado.
* **Tipos Primitivos:** Inicialização e checagem de tipos usando o operador `typeof` para os tipos `string`, `number`, `boolean`, `undefined` e `null`.
* **Template Literals vs Concatenação:** Construção e comparação da mesma frase utilizando a sintaxe moderna de crases `` `O aluno \${...}` `` e a concatenação tradicional com o operador `+`.

### Bloco 2 – Funções
* **Hoisting (Içamento):** Implementação da função `ehMaiorDeIdade` no formato de função declarada, demonstrando que ela pode ser chamada antes de sua definição no código.
* **Expressão de Função:** Criação da mesma lógica na constante `ehMaiorDeIdadeExpressao`, evidenciando o erro de `ReferenceError` ao tentar invocá-la antes da declaração.
* **Variações da Função Dobro:** Escrita da função em três sintaxes diferentes: declarada, expressão de função e *arrow function* simplificada.
* **Parâmetro Padrão:** Variação da função com parâmetro *default* (`n = 1`) testada com e sem a passagem de argumentos.

### Bloco 3 – Controle de Fluxo
* **Estrutura `if/else`:** Função `classificarNota(nota)` que retorna "Aprovado" para valores maiores ou iguais a 6 e "Reprovado" caso contrário.
* **Estrutura `switch`:** Validação da variável `corSemaforo` para exibir os comandos "Pare", "Atenção" ou "Siga".
* **Laço `for` Clássico:** Impressão completa da tabuada do número 5 (de 1 a 10).
* **Laço `while`:** Execução de uma contagem regressiva de 5 até 1 com condição de parada explícita.
* **Estruturas de Repetição Combinadas:** Varredura dos números de 1 a 20 indicando se cada um é "par" ou "ímpar" utilizando o operador de módulo (`% 2 === 0`), implementado tanto em um laço `for` quanto em um laço `while`.
* **Função com Tratamento `default`:** Função `diaDaSemana(numero)` utilizando `switch` para converter números de 1 a 7 nos dias correspondentes, tratando valores fora do intervalo.

---

## 🚀 Como Executar o Projeto

1. Certifique-se de possuir o **Node.js** instalado em seu computador.
2. Abra a pasta onde o arquivo `app.js` está localizado utilizando o terminal ou o VS Code.
3. Digite o seguinte comando para rodar o script:

```bash
node app.js
```

*(Alternativamente, todo o código do arquivo `app.js` pode ser copiado e colado diretamente no Console de Desenvolvedor do seu navegador de internet).*

---

## ✍️ Autoria
Atividade acadêmica desenvolvida para a disciplina de **Desenvolvimento Web** (Semana 03).  
**Universidade CEUMA.**
