# ECMAScript 6+
Guia rápido com principais conceitos do ECMAScript 6+

- [ECMAScript 6+](#ecmascript-6)
- [Classes](#classes)
- [Arrow Functions](#arrow-functions)
- [Desestruturação](#desestruturação)
- [Operador Rest](#operador-rest)
- [Operador Spread](#operador-spread)
- [Template Literals](#template-literals)
- [Object Short Syntax](#object-short-syntax)

# Classes

``` javascript

class List {
  constructor() {
    this.data = [];
  }

  static print() {
    console.log('este é um método estático');
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.usuario = 'Lucas';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();
MinhaLista.add('Novo todo');
// ['Novo todo']
TodoList.print();
// este é um método estático

```

# Arrow Functions

``` javascript

const minhaFuncao = () => {
  console.log('mensagem');
};

minhaFuncao();
// mensagem

```

# Desestruturação

``` javascript

const usuario = {
  nome: 'Lucas',
  idade: 33,
  endereco: {
    cidade: 'Sao Jose dos Campos',
    estado: 'SP',
  },
};

const { nome, idade, endereco } = usuario;

console.log(nome);
// Lucas
console.log(idade);
// 33
console.log(endereco.cidade);
// Sao Jose dos Campos
console.log(endereco.estado);
// SP

```

# Operador Rest

``` javascript 

const usuario = {
  nome: 'Lucas',
  idade: 33,
  endereco: {
    cidade: 'Sao Jose dos Campos',
    estado: 'SP',
  },
};

const { nome, ...resto } = usuario;

console.log(nome);
// Lucas

console.log(resto);
// { idade: 33, endereco: { cidade: 'Sao Jose dos Campos', estado: 'SP' }

```

``` javascript 

const soma = (a, b, ..params) => {
  return params;
};

soma(1, 2, 3, 4);
// [3, 4]

```

# Operador Spread

``` javascript 

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);
// [1, 2, 3, 4, 5, 6]

```

``` javascript

const usuario1 = {
  nome: 'Lucas',
  idade: 33,
  endereco: {
    cidade: 'Sao Jose dos Campos',
    estado: 'SP',
  },
};

const usuario2 = { ...usuario1,  nome: 'Usuario 2' };
console.log(usuario2);
// {"nome":"Usuario 2","idade":33,"endereco":{"cidade":"Sao Jose dos Campos","estado":"SP"}}

```

# Template Literals

``` javascript
const estado = 'SP';
console.log(`Meu estado é ${estado}`);
// Meu estado é SP
```

# Object Short Syntax

``` javascript

const nome = 'Lucas';
const idade = 33;

const usuario = {
  nome,
  idade,
  empresa: 'LSR Informatica',
};

console.log(usuario);
// {"nome":"Lucas","idade":33,"empresa":"LSR Informativa"}"

```
