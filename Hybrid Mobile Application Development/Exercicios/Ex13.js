// A)
class Pet {
    nome = "";
    raca = "";
    idade = 0;
    peso = 0.0;
    nomeDono = "";
}

let p1 = new Pet();
p1.nome = "Totó";
p1.raca = "Vira Lata";
p1.idade = 4;
p1.peso = 9.6;
p1.nomeDono = "Nathalia Almeida";

let p2 = new Pet();
p2.nome = p1.nome;
p2.raca = p1.raca;
p2.idade = p1.idade;
p2.peso = p1.peso;
p2.nomeDono = p1.nomeDono;


// 
const listaPets = [
    { nome: "Totó", raca: "Vira Lata", idade: 4, peso: 9.6, nomeDono: "Nathalia Almeida" },
    { nome: "Rex", raca: "Pastor Alemão", idade: 7, peso: 23.8, nomeDono: "Gabriel" },
    { nome: "Suri", raca: "Lhasa", idade: 9, peso: 7.0, nomeDono: "Antonio" },
    { nome: "Lassie", raca: "Cockie", idade: 16, peso: 13.0, nomeDono: "Antonio" }
];
//

// B)
const listaNomes = listaPets.map((pet) => pet.nome);
console.log(listaNomes);