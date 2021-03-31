name: capa

.capa-titulo[

# Soluções WEB

]

.capa-subtitulo[

### Prof. Lucas Ferreira

]

---

class: center, middle
count: false

# Front­end: JavaScript e AJAX

---

## Java... Script?

- JavaScript ou JS é uma linguagem de programação interpretada

--

- Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias WEB

--

- É uma linguagem amplamente usada em navegadores web (client-side)

--

- E também usada em servidores através de Node.js (exemplo)

--

- É linguagem multi-paradigma com suporte a estilos de programação orientados a eventos, funcionais e imperativos (orientado a objetos e prototype-based)

--

- É baseada em ECMAScript \*, padronizada pela Ecma international nas especificações ECMA-262[6] e ISO/IEC 16262

--

- ...e não têm nada haver com Java!

---

## Breve História

--

- Criada por Brendan Eich na década de 90, mais precisamente em 1995

--

- Encomendada pela Netscape Communications, Eich escreveu a linguagem em 10 dias, em maio de 1995

--

- A Netscape acreditava que a web teria que ser mais dinâmica, pois o Navigator tinha sempre que fazer uma requisição ao servidor para obter uma resposta no estado de navegação

--

- A proposta inicial de Eich era desenvolver uma linguagem totalmente diferente (baseada em Scheme e LISP)

--

- Porém devido a parceria da Netscape com a Sun Microsystems dominou a ideia de sintaxe baseada no Java

--

- Desenvolvida sob o nome Mocha, a linguagem chegou a ser chamada de LiveScript

--

- Mas com o lançamento do Netscape Navigator 2.0 em setembro de 1995, mas foi renomeada para JavaScript

---

## Evolução

Em Agosto de 1996, a Microsoft cria uma linguagem idêntica chamada JScript para o IE3

--

Com isso a Netscape decidiu normatizar a linguagem através da organização ECMA International

--

A ECMA-262 é mantida pelo Comitê Técnico 39 (TC39) atualmente composto por especialistas de grandes empresas como Microsoft, Mozilla e Google

--

- ECMAScript 1 (Junho de 1997)
- ECMAScript 2 (Agosto de 1998)
- ECMAScript 3 (Dezembro de 1999)
- ECMAScript 4 (abandonada em Julho de 2008)
- ECMAScript 5 (Dezembro de 2009) 👈 popular
- ECMAScript 6 (Junho de 2015) 👈 atual
- ECMAScript 7 (Junho de 2016) 👈 futura
- ECMAScript 8 (Junho de 2017)
- ECMAScript 9 (Junho de 2018)
- ECMAScript 10 (Junho de 2019)

Ref: https://www.w3schools.com/js/js_versions.asp

---

## Características

O uso primário de JavaScript é escrever funções que são embarcadas ou incluídas em páginas HTML e que interagem com o Modelo de Objeto de Documentos (DOM) da página.

--

### Suporte universal

Todos os navegadores da Web modernos e populares suportam JavaScript com interpretadores integrados.

--

### Imperativa e Estruturada

JavaScript suporta os elementos de sintaxe de programação estruturada da linguagem C como, por exemplo, if, while, switch.

---

## Características

### Dinâmica

- Tipagem dinâmica 👉 tipos são associados com valores, não com variáveis
- Baseada em objetos
- Avaliação em tempo de execução 👉 eval

--

### Funcional

- Funções de primeira classe 👉 objetos que possuem propriedades e métodos
- Funções aninhadas 👉 são funções definidas dentro de outras funções

--

### Baseada em Protótipos

- Protótipos 👉 mecanismo de herança semelhante a classes
- Funções e métodos 👉 não há distinção entre a definição de uma função e a<br />definição de um método no JavaScript

---

## Mas para que serve o JavaScript?

- Interação com elementos de uma página HTML (DOM)

--

- Trabalhar com váriáveis, resultados e lógica

--

- Proporcionar interações ricas ao usuário

--

- Requisitar dados e informações do servidor sem recarregar a página (AJAX)

--

- Desenvolver aplicativos mobile (PhoneGap, IONIC e React Native)

--

- E porque não também servir páginas e documentos da web (Node.js)?

--

### Hello World

```js
function greetMe(nome) {
  alert("Olá, " + nome);
}

greetMe("mundo"); // "Olá, mundo"
```

---

## Sintaxe Básica

Primeiro ponto a ser destacado é que JavaScript é case-sensitive:

```js
// abaixo temos duas variáveis distintas
var Nome = "Wesley";
var nome = "Vinícius";
```

---

## Declaração de Variáveis

`var` 👉 Declara uma variável

`let` 👉 Declara uma variável local de escopo do bloco

`const` 👉 Declara uma constante de escopo de bloco, apenas de leitura

--

```js
if (true) {
  var x = 5;
}

console.log(x); // 5
```

--

```js
if (true) {
  let y = 5;
}

console.log(y); // ReferenceError: y não está definido
```

---

## Tipos de dados (primitivos)

`Boolean` 👉 `true` ou `false`

`null`

`undefined`

`Number`

`String`

---

## Array (Matriz)

```js
var meuArray = new Array("Valor 1", "Valor 2", "Valor 3");
```

--

```js
var meuArray = ["Valor 1", "Valor 2", "Valor 3"];
```

--

O índice dos arrays em JS começam em 0 `(meuArray[0])`

---

## Objetos

```js
var meuObjeto = {
  nome: "Lucas",
  idade: 32,
};

console.log(meuObjeto.nome); // Lucas
console.log(meuObjeto.idade + " anos"); // 32 anos
```

---

## Declaração em bloco

Uma declaração em bloco é utilizada para agrupar declarações.
O bloco é delimitado por um par de chaves:

```js
{
  declaracao_1;
  declaracao_2;
  .
  .
  .
  declaracao_n;
}
```

Servem para if, else, for, while, function e etc

---

## Declarações condicionais

```js
if (condicao) {
  declaracao_1;
} else if (condicao_2) {
  declaracao_2;
} else if (condicao_n) {
  declaracao_n;
} else {
  declaracao_final;
}
```

Valores avaliados como falsos: `false`, `undefined`, `null`, `0`, `NaN`, string vazia ("")

---

## Declaração switch

```js
switch (expressao) {
  case rotulo_1:
    declaracoes_1
    [break;]
  case rotulo_2:
    declaracoes_2
    [break;]
    ...
  default:
    declaracoes_padrao
    [break;]
}
```

---

## Estruturas de Repetição (loop)

```js
for (let passo = 0; passo < 5; passo++) {
  console.log(`Andou ${passo} passos`);
}
```

--

```js
let passo = 0;
while (passo < 5) {
  console.log(`Andou ${passo} passos`);
  passo++;
}
```

--

Use `break` para parar a execução de um loop ou continue para pular para o próximo passo

---

## Declaração de Funções

A definição da função (também chamada de declaração de função) consiste no uso da palavra chave function, seguida por:

- Nome da Função.
- Lista de argumentos para a função, entre parênteses e separados por vírgulas.
- Declarações JavaScript que definem a função, entre chaves { }.

--

```js
function square(numero) {
  return numero * numero;
}
```

--

```js
var square = function (numero) {
  return numero * numero;
};
```

--

```js
square(5); // 25
```

--

As variáveis definidas no interior de uma função não podem ser acessadas de nenhum lugar fora da função, porque a variável está definida apenas no escopo da função.

---

## Arrow Functions (ES6)

Uma expressão função de seta tem uma sintaxe pequena em comparação com a expressão de função. Arrow functions são sempre anônimas.

```js
const square = numero => numero * numero;
```

---

## Operadores Básicos

- `=` atribuição
- `*` multiplicação
- `/` divisão
- `-` subtração
- `+` soma
- `++` incremento
- `--` decremento
- `==` comparação
- `===` comparação estrita
- `!=` diferença
- `!==` diferença estrita
- `>` e `>=` maior, maior igual
- `<` e `<=` menor, menor igual

---

## Operador spread (ES6)

O operador spread permite que uma expressão seja expandido em locais onde são esperados vários argumentos (para chamadas de função) ou vários elementos (para arrays).

```js
var partes = ["ombro", "joelhos"];
var musica = ["cabeca", ...partes, "e", "pés"];
```

---

## Definições de Classes (clássico)

_JavaScript_

```js
function Employee() {
  this.name = "";
  this.dept = "general";
}
Employee.prototype.getMyName = function () {
  return this.name;
};
```

--

_Java (comparação)_

```java
public class Employee {
  public String name = "";
  public String dept = "general";

  public String getMyName() {
    return this.name;
  }
}
```

---

## Definições de Classes (JS Moderno - ES6)

```js
class Employee {
  constructor() {
    this.name = "";
    this.dept = "general";
  }
  getMyName() {
    return this.name;
  }
  static builder() {
    return new Employee();
  }
}
```

--

Instanciar qualquer tipo de classe em JS se faz evidentemente:

`var meuEmpregado = new Employee();`

---

## Outras questões

- Números e funções Math
- Datas e o objeto Date
- Expressões Regulares (RegExp)
- Métodos de array (push, splice, slice, pop, concat, map, filter e etc)

---

class: center, middle

# LET'S ROCK! 🤘

.center[.gif-img[![Bang!](./img/head.gif)]]

---

class: center, middle

# DOM: sua página no mundo JavaScript

---

## Document Object Model

- O DOM (Document Object Model) é uma interface que representa como os documentos HTML são lidos pelo seu browser

--

- Após o browser ler seu documento HTML, ele cria um objeto que faz uma representação estruturada do seu documento e define meios de como essa estrutura pode ser acessada

--

- Essa estrutura pode ser acessada através da variável global `document`.

--

- Nós podemos acessar e manipular o DOM com JavaScript, é a forma mais fácil e usada de interação

--

- O termo "documento" é frequentemente utilizado em referências à nossa página. No mundo front-end, documento e página são sinônimos.

---

## Representação do DOM pelo navegador

.center[.dom-img[![Estrutura DOM](./img/dom.jpg)]]

---

## Métodos do DOM (mais comuns)

O DOM possui muitos métodos, são eles que fazem a ligação entre os nodes (elementos) e os eventos.

--

`getElementById` 👉 obtem um elemento através de seu ID

```js
const myEl = document.getElementById("start");
```

--

`getElementsByClassName` 👉 obtem um ou vários elementos através de sua classe do CSS

```js
const myContainer = document.getElementsByClassName("container");
```

Esse método retorna um HTMLCollection de todos elementos que estiverem contendo o nome da classe passada.

---

## Métodos do DOM (mais comuns)

`getElementsByTagName` 👉 obtem um ou vários elementos através da TAG usada

```js
const buttons = document.getElementsByTagName("button");
```

--

`querySelector` 👉 obtem um elemento através de seu seletor CSS

```js
const resetButton = document.querySelector("form #reset");
```

--

`querySelectorAll` 👉 obtem vários elementos através de seus seletores CSS

```js
const myButtons = document.querySelectorAll("header .button");
```

---

## Percorrendo elementos do DOM

Após obter sua coleção de elementos, em especial seleções que retornem HTMLCollection pode ser necessário acessar todos de uma só vez, para isso será necessário um loop:

```js
const fakeImages = document.querySelectorAll(".fake-image");
for (var i = 0; i < fakeImages.length; i++) {
  fakeImages[i].style.border = "1px solid red";
}
```

---

## Eventos DOM

Após determinar o elemento alvo e obter com um dos métodos seletores, será possível adicionar eventos de interação a estes mesmos elementos.

--

_Forma simples:_

```js
const meuBotao = documento.getElementById("meuBotao");
meuBotao.onclick = function (event) {
  alert("Cliquei neste botão.");
};
```

--

_Forma indicada:_

```js
meuBotao.addEventListener("click", function (event) {
  alert("Cliquei neste botão.");
});
```

---

## Eventos mais comuns

- `oninput` 👉 quando um elemento input tem seu valor modificado
- `onclick` 👉 quando ocorre um click com o mouse
- `onkeypress` 👉 quando pressionar e soltar uma tecla
- `onkeydown` 👉 quando pressionar uma tecla
- `onkeyup` 👉 quando soltar uma tecla
- `onblur` 👉 quando um elemento perde foco
- `onfocus` 👉 quando um elemento ganha foco
- `onchange` 👉 quando um input, select ou textarea tem seu valor alterado
- `onload` 👉 quando a página é carregada
- `onunload` 👉 quando a página é fechada
- `onsubmit` 👉 disparado antes de submeter o formulário (útil para realizar validações)

---

class: center, middle

# KEEP ROCKIN! 🤘

.center[.gif-img[![Animal](./img/animal.gif)]]

---

## E finalmente... AJAX!

_Asynchronous Javascript and XML_, ou **AJAX** é originalmente o uso metodológico de tecnologias como Javascript e XML, para tornar páginas Web mais interativas para o usuário, utilizando-se principalmente de solicitações assíncronas de informações

--

Apesar do nome, a utilização de XML não é obrigatória sendo que JSON é amplamente mais usado atualmente

---

## E comofas?

**Requisição padrão / clássica**

```js
var minhaRequisicao = new XMLHttpRequest();
minhaRequisicao.responseType = "json"; // opcional...
minhaRequisicao.onload = function () {
  if (minhaRequisicao.status === 200) {
    // aqui vem o retorno do carregamento assíncrono
    console.log(minhaRequisicao.response);
  }
};
minhaRequisicao.open("GET", "/minhaUrlNoServidor");
minhaRequisicao.send();
```

---

## E comofas?

**Requisição clássica com POST**

```js
var formData = new FormData();
formData.append("nome", "Lee");
formData.append("sobrenome", "Souza");

var minhaRequisicao = new XMLHttpRequest();
minhaRequisicao.onload = function () {
  if (minhaRequisicao.status === 200) {
    // aqui vem o retorno do carregamento assíncrono
    console.log(minhaRequisicao.response);
  }
};
minhaRequisicao.open("POST", "/minhaUrlNoServidor");
minhaRequisicao.send(formData); // passa o objeto com dados de post aqui
```

---

## E comofas?

**Requisição moderna:**

```js
fetch("/minhaUrlNoServidor")
  .then(response => {
    return response.text(); // response.json()
  })
  .then(data => {
    console.log(data); // retorno de texto...
  });
```

---

## E comofas?

**Requisição moderna com POST:**

```js
var formData = new FormData();
formData.append("nome", "Lee");
formData.append("sobrenome", "Souza");

fetch("/minhaUrlNoServidor", { method: "POST", body: formData })
  .then(response => {
    return response.text(); // response.json()
  })
  .then(data => {
    console.log(data); // retorno de texto...
  });
```

---

class: center, middle

# SOLO FINAL 🤘

.center[.gif-img[![Slash](./img/slash.gif)]]

---

## Bibliotecas Maneiras

**Axios**

https://github.com/axios/axios

**XR**

https://github.com/radiosilence/xr

**jQuery**

https://jquery.com/

**Parsley**

http://parsleyjs.org/
