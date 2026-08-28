const cliente = {
    nome: "jose",
    idade: "15",
    email: "jose.binde@escola.pr.gov.br",
    telefone: ["4255552233", "4299934526"],
    saldo: 200,
    efetuePagamento: function (valor){
        if (valor > this.saldo){
            console.log("saldo insuficiente");
        }else{
            this.saldo -= valor;
            console.log(`pagamento relizado. novo saldo: ${this.saldo}`);
        }
    },
};

cliente.efetuePagamento(25);