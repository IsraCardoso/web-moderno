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

const obj = { name: "Roberto" }; //mudar para "nome"
imprimirNomeGritado(obj);


