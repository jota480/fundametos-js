const cliente = {
    nome: "jose",
    idade: "15",
    email: "jose.binde@escola.pr.gov.br",
    telefone: ["4255552233", "4299934526"],
};
/*
cliente.endereço = [
{
    rua: "dr. orlando Araujo Costa",
    numero: 1931,
    apartamento: true,
    compemento: "ap 934"
},
];
*/

const ChavesDoObjeto = Object.keys(cliente);
console.log(ChavesDoObjeto);

if(!ChavesDoObjeto.includes("endereco")){
    console.log("erro. é necessario ter um endereço cadastrado");
}


