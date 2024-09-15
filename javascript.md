# Minicurso de JavaScript Básico

## JavaScript

**Exemplo prático:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Primeiro Exemplo JavaScript</title>
</head>
<body>
    <h1>Bem-vindo ao JavaScript!</h1>
    <button onclick="saudar()">Clique aqui para ser saudado</button>

    <script>
        function saudar() {
            alert("Olá! Este é o seu primeiro script JavaScript.");
        }
    </script>
</body>
</html>
```


<!-- Exemplo prático (script externo): -->
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Arquivo JS Externo</title>
</head>
<body>
    <h1>Bem-vindo ao Curso de JavaScript</h1>
    <button onclick="saudar()">Clique aqui para ser saudado</button>
    <script src="meuScript.js"></script>
</body>
</html>
```

```javascript
function saudar() {
            alert("Olá! Este é o seu primeiro script JavaScript.");
        }

```

## 1. Tipos de Variáveis

Explicação:

    let: Variável com escopo de bloco.
    const: Variável constante, não pode ser reatribuída.
    var: Variável com escopo de função ou global, podendo ser redeclarada.

Exemplo prático:

```javascript

let nome = "João";
const idade = 25;

nome = "Carlos"; // Permitido com let
// idade = 26; // Erro! Constantes não podem ser alteradas

var cidade = "São Paulo";
if (true) {
    var cidade = "Rio de Janeiro"; // Afeta a variável fora do bloco
}
console.log(cidade); // "Rio de Janeiro"
```

## 2. Tipos de Dados

Explicação:

    String: Cadeia de caracteres.
    Number: Números inteiros e decimais.
    Boolean: true ou false.
    Undefined: Variável não inicializada.
    Null: Ausência intencional de valor.
    Symbol: Identificadores únicos.
    BigInt: Números inteiros grandes.

Exemplo prático:

```javascript

let texto = "Hello World"; // String
let numero = 42; // Number
let isTrue = true; // Boolean
let indefinido; // Undefined

console.log(typeof texto); // "string"
console.log(typeof numero); // "number"
console.log(typeof isTrue); // "boolean"
console.log(typeof indefinido); // "undefined"
```

## 3. Operadores Lógicos, de Comparação e Aritméticos

Explicação:

    Operadores Lógicos: && (AND), || (OR), ! (NOT).
    Operadores de Comparação: ==, ===, !=, !==.

Exemplo prático:

```javascript

let x = 5;
let y = "5";

// Operador == apenas verifica o valor
console.log(x == y); // true

// Operador === verifica valor e tipo
console.log(x === y); // false

// operadores aritméticos
let x = 10;
let y = 5;
console.log("Soma:", x + y);
console.log("Multiplicação:", x * y);


// Operadores lógicos
if (x > 0 && x < 10) {
    console.log("x está entre 0 e 10");
}

if (x > 0 || x < 10) {
    console.log("Uma das condições é verdadeira");
}

let isValid = !(x === y); // Inversão lógica
console.log(isValid); // true
```

## Interagindo com o usuário

Explicação: JavaScript permite interagir com o usuário através de janelas pop-up como alert(), prompt() e confirm().

Exemplo prático:
```javascript
alert("Bem-vindo ao site!");
let nome = prompt("Qual o seu nome?");
let resposta = confirm("Você quer continuar?");
console.log(nome, resposta);
```

## Conversão de tipos de dados

Explicação: Às vezes, é necessário converter entre tipos de dados. Por exemplo, Number() converte uma string para número.

Exemplo prático:
```javascript
let numString = "100";
let num = Number(numString);
console.log("Número convertido:", num);
console.log("Soma:", num + 20);
```


## Controle de Fluxo
### 1. Condicionais (if, else if, else)

Explicação: Estruturas condicionais ajudam a decidir qual bloco de código executar com base em uma condição.

Exemplo prático:

```javascript

let temperatura = 30;

if (temperatura > 35) {
    console.log("Está muito quente!");
} else if (temperatura >= 20 && temperatura <= 35) {
    console.log("O clima está agradável.");
} else {
    console.log("Está frio.");
}

//validando idade
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

```

### 2. Laços de Repetição (for, while, do...while)

Explicação:

    for: Itera sobre um bloco de código um número específico de vezes.
    while: Continua a execução enquanto a condição for verdadeira.
    do...while: Executa ao menos uma vez e continua enquanto a condição for verdadeira.

Exemplo prático do for:
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Repetição:", i);
}
```

Exemplo prático de while:

```javascript

let contador = 0;

while (contador < 5) {
    console.log("Contador é:", contador);
    contador++;
}
```

Exemplo prático de do...while:

```javascript

let numero = 10;

do {
    console.log("Número:", numero);
    numero--;
} while (numero > 5);
```

## Funções, Arrays e Objetos
### 1. Funções

Explicação: Funções são blocos de código reutilizáveis. JavaScript suporta funções tradicionais e arrow functions.

Exemplo prático de função:

```javascript

function calcularMedia(a, b) {
    return (a + b) / 2;
}

let resultado = calcularMedia(10, 8);
console.log("A média é:", resultado);
```
Arrow function (função de seta):

```javascript

const saudacao = nome => "Olá, " + nome;
console.log(saudacao("Maria"));
```

### 2. Arrays

Explicação: Arrays são listas ordenadas de valores. Métodos úteis incluem push(), pop(), shift() e unshift().

Exemplo prático:

```javascript

let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva"); // Adiciona "uva" ao final do array
console.log(frutas); // ["maçã", "banana", "laranja", "uva"]

frutas.pop(); // Remove "uva"
console.log(frutas); // ["maçã", "banana", "laranja"]

frutas.shift(); // Remove "maçã"
console.log(frutas); // ["banana", "laranja"]

frutas.unshift("melancia"); // Adiciona "melancia" no início
console.log(frutas); // ["melancia", "banana", "laranja"]
```

### 3. Objetos

Explicação: Objetos são coleções de pares chave-valor. São úteis para armazenar dados relacionados.

Exemplo prático:

```javascript

let pessoa = {
    nome: "Ana",
    idade: 28,
    profissao: "Desenvolvedora",
    saudacao: function() {
        return "Olá, meu nome é " + this.nome;
    }
};

console.log(pessoa.nome); // "Ana"
console.log(pessoa.saudacao()); // "Olá, meu nome é Ana"
```

### 4. Map e Set

Explicação:

    Map: Estrutura de dados que armazena pares chave-valor e mantém a ordem de inserção.
    Set: Estrutura de dados que armazena valores únicos.

Exemplo prático de Map:

```javascript

let map = new Map();
map.set("nome", "João");
map.set("idade", 30);

console.log(map.get("nome")); // "João"
console.log(map.get("idade")); // 30
```

Exemplo prático de Set:

```javascript

let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Não é adicionado, pois é um valor duplicado

console.log(set.has(1)); // true
console.log(set.size); // 2
```

### 5. Dicionários (Objetos como Dicionários)

Explicação: Objetos podem atuar como dicionários, onde as chaves são strings (ou Symbols) e os valores podem ser qualquer tipo de dados.

Exemplo prático:

```javascript

let dicionario = {
    "abrigo": "Lugar para se proteger",
    "livro": "Objeto com páginas e capa"
};


console.log(dicionario["abrigo"]); // "Lugar para se proteger"
console.log(dicionario["livro"]); // "Objeto com páginas e capa"
```

## Manipulação do DOM
###  1. Seletores e Manipulação

Explicação:

    document.querySelector(): Seleciona o primeiro elemento que corresponde ao seletor CSS fornecido.
    document.getElementById(): Seleciona um elemento com o ID específico.

Exemplo prático:

```html

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Manipulação do DOM</title>
</head>
<body>
    <h1 id="titulo">Título Original</h1>
    <button id="alterarTitulo">Alterar Título</button>

    <script>
        document.getElementById("alterarTitulo").addEventListener("click", function() {
            document.querySelector("#titulo").textContent = "Título Alterado";
        });

        let paragrafo = document.querySelector("p");
        paragrafo.style.color = "blue";
        paragrafo.textContent = "Texto modificado pelo JavaScript!";

        let botao = document.querySelector("button");
        botao.addEventListener("click", function() {
            alert("Botão clicado!");
        });


    </script>
</body>
</html>
```
### 2. Criando e Adicionando Elementos
#### 2.1. document.createElement()

Explicação: O método document.createElement() cria um novo elemento HTML no DOM. Você passa uma string que especifica o tipo de elemento a ser criado.

Exemplo prático:

```javascript

// Cria um novo elemento <p>
let paragrafo = document.createElement('p');
paragrafo.textContent = 'Este é um novo parágrafo.';

// Adiciona o novo parágrafo ao corpo do documento
document.body.appendChild(paragrafo);
```
#### 2.2. appendChild()

Explicação: O método appendChild() adiciona um nó (um elemento ou outro tipo de nó) como o último filho de um elemento pai no DOM.

Exemplo prático:

```javascript

// Cria um novo elemento <ul>
let lista = document.createElement('ul');

// Cria e adiciona itens à lista
for (let i = 1; i <= 3; i++) {
    let item = document.createElement('li');
    item.textContent = 'Item ' + i;
    lista.appendChild(item);
}

// Adiciona a lista ao corpo do documento
document.body.appendChild(lista);
```

#### 2.3. prepend()

Explicação: O método prepend() adiciona um ou mais nós como o primeiro filho de um elemento pai no DOM. É útil quando você deseja adicionar novos elementos no início de um container.

Exemplo prático:

```javascript

// Cria um novo elemento <div> com alguns itens
let div = document.createElement('div');
let novoItem = document.createElement('p');
novoItem.textContent = 'Este é o novo item no início.';

// Adiciona o novo item como o primeiro filho da div
div.prepend(novoItem);

// Adiciona a div ao corpo do documento
document.body.appendChild(div);
```

### 3. Manipulação de Atributos e Classes

Explicação:

    element.setAttribute(): Define o valor de um atributo para o elemento.
    element.classList.add(): Adiciona uma classe ao elemento.

Exemplo prático:

```javascript

let div = document.createElement('div');
div.setAttribute('id', 'minhaDiv');
div.classList.add('caixa');

document.body.appendChild(div);

```

### 4. Exemplos Práticos

#### Exemplo 1:

    Crie um botão que, ao ser clicado, adiciona um novo item no início de uma lista não ordenada <ul> existente na página.
    Cada item deve ter um texto gerado dinamicamente.

Código:

```html

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Adicionar Itens no Início</title>
</head>
<body>
    <ul id="lista"></ul>
    <button id="adicionarItem">Adicionar Item no Início</button>

    <script>
        document.getElementById('adicionarItem').addEventListener('click', function() {
            let ul = document.getElementById('lista');
            let li = document.createElement('li');
            li.textContent = 'Novo Item ' + (ul.children.length + 1);
            ul.prepend(li);
        });
    </script>
</body>
</html>
```

#### Exemplo 2:

    Crie um formulário com um campo de texto e um botão.
    Ao clicar no botão, crie um novo parágrafo com o texto do campo e adicione-o ao início do corpo do documento.

Código:

```html

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Adicionar Parágrafo no Início</title>
</head>
<body>
    <input type="text" id="campoTexto" placeholder="Digite algo">
    <button id="adicionarParagrafo">Adicionar Parágrafo no Início</button>

    <script>
        document.getElementById('adicionarParagrafo').addEventListener('click', function() {
            let texto = document.getElementById('campoTexto').value;
            let p = document.createElement('p');
            p.textContent = texto;
            document.body.prepend(p);
        });
    </script>
</body>
</html>
```


## Armazenamento Local com `localStorage`

### 1. O que é `localStorage`?
**Explicação:**
`localStorage` é uma API Web que permite armazenar dados no navegador do usuário. É uma forma de armazenamento local persistente, ou seja, os dados permanecem mesmo após o fechamento do navegador. Cada domínio tem seu próprio armazenamento local, isolado de outros domínios.

**Principais características:**
- **Persistência**: Dados são armazenados indefinidamente até serem removidos explicitamente.
- **Escopo**: Armazenamento é específico para o domínio e protocolo (HTTP/HTTPS).
- **Capacidade**: Normalmente, cada domínio pode armazenar cerca de 5MB de dados.

### 2. Usando `localStorage`

#### 2.1. Armazenar Dados
Para armazenar dados em `localStorage`, você usa o método `setItem()`. A chave e o valor são ambos strings.

**Exemplo prático:**
```javascript
// Armazenando dados
localStorage.setItem('nome', 'Ana');
localStorage.setItem('idade', '28');
```

#### 2.2. Recuperar Dados

Para recuperar dados, você usa o método getItem(), passando a chave do item que você deseja recuperar.

Exemplo prático:
```javascript
// Recuperando dados
let nome = localStorage.getItem('nome');
let idade = localStorage.getItem('idade');

console.log(nome); // "Ana"
console.log(idade); // "28"
```

#### 2.3. Remover Dados

Para remover um item específico, você usa o método removeItem(), passando a chave do item que deseja remover.

Exemplo prático:
```javascript
// Remover um item específico
localStorage.removeItem('nome');
```

#### 2.4. Limpar Todos os Dados

Para remover todos os itens armazenados em localStorage, você usa o método clear().

Exemplo prático:
```javascript
// Limpar todos os dados armazenados
localStorage.clear();
```

### 3. Trabalhando com Objetos e Arrays

Os dados em localStorage são armazenados como strings. Para armazenar objetos e arrays, você precisa convertê-los para strings usando JSON.stringify(), e depois convertê-los de volta para o formato original com JSON.parse().

Exemplo prático:

Armazenando um objeto:
```javascript
let usuario = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
};

// Convertendo o objeto para uma string JSON e armazenando
localStorage.setItem('usuario', JSON.stringify(usuario));
```

Recuperando um objeto:
```javascript
// Recuperando a string JSON e convertendo de volta para um objeto
let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));

console.log(usuarioRecuperado.nome); // "João"
console.log(usuarioRecuperado.idade); // 30
```
### 4. Examplo Prático

    Crie um formulário com dois campos de texto: um para nome e outro para idade. Adicione um botão para salvar esses dados em localStorage.
    Adicione um segundo botão que, quando clicado, recupera e exibe os dados salvos no localStorage.

Código
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Armazenamento Local</title>
</head>
<body>
    <h1>Armazenamento Local com `localStorage`</h1>
    <input type="text" id="nome" placeholder="Nome">
    <input type="text" id="idade" placeholder="Idade">
    <button onclick="salvarDados()">Salvar Dados</button>
    <button onclick="exibirDados()">Exibir Dados</button>
    <p id="resultado"></p>

    <script>
        function salvarDados() {
            let nome = document.getElementById('nome').value;
            let idade = document.getElementById('idade').value;
            let usuario = {
                nome: nome,
                idade: idade
            };
            localStorage.setItem('usuario', JSON.stringify(usuario));
        }

        function exibirDados() {
            let usuario = JSON.parse(localStorage.getItem('usuario'));
            let resultado = document.getElementById('resultado');
            if (usuario) {
                resultado.textContent = `Nome: ${usuario.nome}, Idade: ${usuario.idade}`;
            } else {
                resultado.textContent = "Nenhum dado encontrado.";
            }
        }
    </script>
</body>
</html>
```


## Atividades de Prática JavaScript

1. **Modificar Texto com JavaScript**
   - Crie um arquivo HTML com um parágrafo e um botão. Ao clicar no botão, altere o texto do parágrafo para "Texto alterado com JavaScript".

2. **Exibir Alerta com o Nome do Usuário**
   - Crie um arquivo HTML com um botão. Ao clicar no botão, exiba um prompt pedindo o nome do usuário e, em seguida, um alerta com "Olá, [nome]".

3. **Contador Simples**
   - Crie um arquivo HTML com um parágrafo e um botão. O parágrafo deve exibir um número que começa em 0. Cada vez que o botão é clicado, o número deve aumentar em 1.

4. **Verificar Idade**
   - Crie um arquivo HTML com um campo de texto para a idade e um botão. Ao clicar no botão, informe se a pessoa é maior de idade (18 anos ou mais) ou menor de idade.

5. **Exibir Dados do LocalStorage**
   - Crie um arquivo HTML com um campo de texto para o nome e um botão para salvar. Armazene o nome em `localStorage`. Adicione um segundo botão para recuperar e exibir o nome armazenado.

6. **Exibir Conteúdo de um Array**
   - Crie um arquivo JavaScript que declare um array com 5 itens (por exemplo, frutas). Utilize um loop `for` para exibir cada item do array no console.