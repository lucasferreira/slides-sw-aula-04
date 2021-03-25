document.getElementById("olaMundo").onclick = function () {
  alert("Não me toque");
};

var pessoaA = {
  id: 1,
  nome: "Lucas",
  email: "lucas.ferreira@satc.edu.br",
};

var pessoaB = { id: 2, nome: "Renan", email: "renanzito@hotmail.com" };

var pessoas = [pessoaA, pessoaB];

var agora = new Date();

for (var i = 0; i < pessoas.length; i++) {
  console.log(
    (agora.getHours() >= 18 ? "Boa-noite" : "Bom-dia") + " " + pessoas[i].nome + ", seu e-mail é " + pessoas[i].email
  );
}

function square(numero) {
  return numero * numero;
}

console.log(square(9));

console.log(`ano`, agora.getFullYear());
console.log(`mes`, agora.getMonth() + 1);
console.log(`dia`, agora.getDate());

var diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

console.log(`dia da semana`, diasSemana[agora.getDay()]);

/* setInterval(function () {
  agora = new Date();
  console.log(`em brasilia ${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`);
}, 1000); */

class Pessoa {
  constructor(id, nome, email, idade) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.idade = idade;
  }
  comprimentar() {
    console.log((agora.getHours() >= 18 ? "Boa-noite" : "Bom-dia") + " " + this.nome + ", seu e-mail é " + this.email);
  }
  maiorDeIdade() {
    return this.idade >= 18 && !!this.email;
  }
}

let outraPessoa = new Pessoa(5, "João", "joaozinho@gmail.com", 16);
console.log(pessoaA);
console.log(outraPessoa);

outraPessoa.comprimentar();

if (outraPessoa.maiorDeIdade()) {
  console.log("Pode entrar " + outraPessoa.nome);
} else {
  console.log("Vaza daqui, " + outraPessoa.nome + ", seu pirralho você têm apenas " + outraPessoa.idade);
}
