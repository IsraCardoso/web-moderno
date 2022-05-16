/* -------------------------------------------------------------------------- */
/*                                Destructuring                               */
/* -------------------------------------------------------------------------- */
const pessoa = {
	nome: "Ana",
	idade: 5,
	endereco: {
		logradouro: "Rua ABC",
		numero: 1000,
	},
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const {
	endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep);

const {
	conta: { ag, num },
} = pessoa;
console.log(ag, num);

function rand([min = 0, max = 1000]) {
	if (min > max) [min, max] = [max, min];
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10]));
console.log(rand([]));
console.log(rand());

/* -------------------------------------------------------------------------- */
/*                           Operadores: Aritméticos                          */
/* -------------------------------------------------------------------------- */
const [a, b, c, d] = [3, 5, 1, 15];

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2;

console.log(soma, subtracao, multiplicacao, -divisao, modulo);

/* -------------------------------------------------------------------------- */
/*                           Operadores: Relacionais                          */
/* -------------------------------------------------------------------------- */
console.log("01)", "1" == 1);
console.log("02)", "1" === 1);
console.log("03)", "3" != 3);
console.log("04)", "3" !== 3);

console.log("05)", 3 < 2);
console.log("06)", 3 > 2);
console.log("07)", 3 <= 2);
console.log("08)", 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log("09)", d1 === d2);
console.log("10)", d1 == d2);
console.log("11)", d1.getTime() === d2.getTime());

console.log("12)", undefined == null);
console.log("13)", undefined === null);

/* -------------------------------------------------------------------------- */
/*                             Operadores: Lógicos                            */
/* -------------------------------------------------------------------------- */
function compras(trabalho1, trabalho2) {
	const comprarSorvete = trabalho1 || trabalho2;
	const comprarTv50 = trabalho1 && trabalho2;
	// const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
	const comprarTv32 = trabalho1 != trabalho2;
	const manterSaudavel = !comprarSorvete; // operador unário

	return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));

/* -------------------------------------------------------------------------- */
/*                            Operadores Unitários                            */
/* -------------------------------------------------------------------------- */
let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);
--num1;
console.log(num1);

console.log(++num1 === num2--); //TRUE
console.log(num1 === num2); // FALSE

/* -------------------------------------------------------------------------- */
/*                          72. Operadores: Ternário                          */
/* -------------------------------------------------------------------------- */
const resultado = (nota) => (nota >= 7 ? "Aprovado" : "Reprovado");

console.log(resultado(7.1));
console.log(resultado(6.7));

/* -------------------------------------------------------------------------- */
/*                                   Runtime                                  */
/* -------------------------------------------------------------------------- */
let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = "teste";

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// criando um variavel maluca: sem var e let!
abc = 3; // nao faça isso em casa!!!
console.log(global.abc);

// module.exports = { e: 456, f: false, g: 'teste' }

/* -------------------------------------------------------------------------- */
/*                    Tratamento de erros: Try/catch/trhow                    */
/* -------------------------------------------------------------------------- */
function tratarErroELancar(erro) {
	// throw new Error('...')
	// throw 10
	// throw true
	// throw 'mensagem'
	throw {
		nome: erro.name,
		msg: erro.message,
		date: new Date(),
	};
}

function imprimirNomeGritado(obj) {
	try {
		console.log(obj.name.toUpperCase() + "!!!");
	} catch (e) {
		tratarErroELancar(e);
	} finally {
		console.log("final");
	}
}

const obj = { nome: "Roberto" }; //mudar para "nome"
imprimirNomeGritado(obj);

/* -------------------------------------------------------------------------- */
/*                                   if/else                                  */
/* -------------------------------------------------------------------------- */
function soBoaNoticia(nota) {
	if (nota >= 7) {
		console.log("Aprovado com " + nota);
	}
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
	if (valor) {
		console.log("É verdade... " + valor);
	}
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});

function teste1(num) {
	if (num > 7) console.log(num);

	console.log("Final");
}

teste1(6);
teste1(8);

function teste2(num) {
	if (num > 7);
	{
		// cuidado com o ';', não usar com as estruturas de controle
		console.log(num);
	}
}

teste2(6);
teste2(8);

const imprimirResultado = function (nota) {
	if (nota >= 7) {
		console.log("Aprovado!");
	} else {
		console.log("Reprovado!");
	}
};

// const imprimirResultado = function(nota) {
// 	if(nota >= 7) console.log('Aprovado!')
// 	else console.log('Reprovado!')
// }

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado("Epa!"); // cuidado!!!

Number.prototype.entre = function (inicio, fim) {
	return this >= inicio && this <= fim;
};

const imprimirResultado = function (nota) {
	if (nota.entre(9, 10)) {
		console.log("Quadro de Honra");
	} else if (nota.entre(7, 8.99)) {
		console.log("Aprovado");
	} else if (nota.entre(4, 6.99)) {
		console.log("Recuperação");
	} else if (nota.entre(0, 3.99)) {
		console.log("Reprovado");
	} else {
		console.log("Nota inválida");
	}
};

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);

/* -------------------------------------------------------------------------- */
/*                                   switch                                   */
/* -------------------------------------------------------------------------- */

const imprimirResultado = function (nota) {
	switch (Math.floor(nota)) {
		case 10:
		case 9:
			console.log("Quadro de Honra");
			break;
		case 8:
		case 7:
			console.log("Aprovado");
			break;
		case 6:
		case 5:
		case 4:
			console.log("Recuperação");
			break;
		case 3:
		case 2:
		case 1:
		case 0:
			console.log("Reprovado");
			break;
		default: //é como um else
			console.log("Nota inválida");
	}
};

/* -------------------------------------------------------------------------- */
/*                                    while                                   */
/* -------------------------------------------------------------------------- */
imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);

function getInteiroAleatorioEntre(min, max) {
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
	opcao = getInteiroAleatorioEntre(-1, 10);
	console.log(`Opção escolhida foi ${opcao}.`);
}

console.log("Até a próxima!");

function getInteiroAleatorioEntre(min, max) {
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}

let n = 0;
let opcao;

do {
	opcao = getInteiroAleatorioEntre(0, 100);
	console.log(`Opção escolhida foi ${opcao}.`);
	n++;
} while (opcao != 0);

console.log(`Até a próxima! Foram necessárias ${n} tentativas.`);

/* -------------------------------------------------------------------------- */
/*                                     for                                    */
/* -------------------------------------------------------------------------- */

let contador = 1;
while (contador <= 10) {
	console.log(`contador = ${contador}`);
	contador++;
}

for (let i = 1; i <= 10; i++) {
	console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++) {
	console.log(`nota = ${notas[i]}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
	console.log(i, notas[i]);
}

const pessoa = {
	nome: "Ana",
	sobrenome: "Silva",
	idade: 29,
	peso: 64,
};

for (let key in pessoa) {
	console.log(`${key} = ${pessoa[key]}`);
}

/* -------------------------------------------------------------------------- */
/*                               break/continue                               */
/* -------------------------------------------------------------------------- */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
	if (x == 5) {
		break;
	}
	console.log(`${x} = ${nums[x]}`);
}

for (y in nums) {
	if (y == 5) {
		continue;
	}
	console.log(`${y} = ${nums[y]}`);
}

externo: for (a in nums) {
	for (b in nums) {
		if (a == 2 && b == 3) break externo;
		console.log(`Par = ${a},${b}`);
	}
}

/* -------------------------------------------------------------------------- */
/*                       funções são first-class object                       */
/* -------------------------------------------------------------------------- */

// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function () {};

// Armazenar em um array
const funcoes = [
	function (a, b) {
		return a + b;
	},
	fun1,
	fun2,
];
console.log(funcoes[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {
	return "Opa";
};
console.log(obj.falar());

// Passar função como param
function run(fun) {
	fun();
}

run(function () {
	console.log("Executando...");
});

// Um função pode retornar/conter um função
function soma(a, b) {
	return function (c) {
		console.log(a + b + c);
	};
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);
/* -------------------------------------------------------------------------- */
function area(largura, altura) {
	const area = largura * altura;
	if (area > 20) {
		console.log(`Valor acima do permitido: ${area}m2.`);
	} else {
		return area;
	}
}
console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 17, 22, 44));
console.log(area(5, 5));

/* -------------------------------------------------------------------------- */
function soma() {
	let soma = 0;
	for (i in arguments) {
		soma += arguments[i];
	}
	return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));

console.log(soma(1.1, 2.2, "Teste"));
console.log(soma("a", "b", "c"));

/* -------------------------------------------------------------------------- */
// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
	a = a || 1
	b = b || 1
	c = c || 1
	return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
	a = a !== undefined ? a : 1
	b = 1 in arguments ? b : 1
	c = isNaN(c) ? 1 : c
	return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
	return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
/* -------------------------------------------------------------------------- */

const pessoa = {
	saudacao: 'Bom dia!',
	falar() {
			console.log(this.saudacao)
	}
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
/* -------------------------------------------------------------------------- */
function Pessoa() {
	this.idade = 0

	const self = this
	setInterval(function() {
			self.idade++
			console.log(self.idade)
	}/*.bind(this)*/, 1000)
}

new Pessoa
/* -------------------------------------------------------------------------- */
let dobro = function (a) {
	return 2 * a
}

dobro = (a) => {
	return 2 * a 
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
	return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())
/* -------------------------------------------------------------------------- */
function Pessoa() {
	this.idade = 0

	setInterval(() => {
			this.idade++
			console.log(this.idade)
	}, 1000)
}

new Pessoa
/* -------------------------------------------------------------------------- */
let comparaComThis = function (param) {
	console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
/* -------------------------------------------------------------------------- */
const soma = function (x, y) {
	return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
	console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
	return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
	falar: function () {
			console.log('Opa')
	}
}

pessoa.falar()
/* -------------------------------------------------------------------------- */
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
/* -------------------------------------------------------------------------- */
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)

const notasBaixas4 =notas.filter(notas => notas < 7)
console.log(notasBaixas4)
/* -------------------------------------------------------------------------- */
// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
	console.log('O evento ocorreu!')
}
/* -------------------------------------------------------------------------- */
function Carro(velocidadeMaxima = 200, delta = 5) {
	// atributo privado
	let velocidadeAtual = 0

	// metodo publico
	this.acelerar = function () {
			if (velocidadeAtual + delta <= velocidadeMaxima) {
					velocidadeAtual += delta
			} else {
					velocidadeAtual = velocidadeMaxima
			}
	}

	// metodo publico
	this.getVelocidadeAtual = function () {
			return velocidadeAtual
	}
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
/* -------------------------------------------------------------------------- */
console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
/* -------------------------------------------------------------------------- */
//closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função
const valor = 'Global'

function minhaFuncao() {
	const valor = 'Local'
    console.log(valor)
}
minhaFuncao()

function minhaFuncao2() {
    console.log(valor)
}
minhaFuncao2()

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
/* -------------------------------------------------------------------------- */
// Factory simples
function criarPessoa() {
	return {
			nome: 'Ana',
			sobrenome: 'Silva'
	}
}

console.log(criarPessoa())
/* -------------------------------------------------------------------------- */
