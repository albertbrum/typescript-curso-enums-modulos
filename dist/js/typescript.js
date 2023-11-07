let valor = 3000;
let nome = "";
let isPago = false;
let qualquer = "";
qualquer = 22;
// arrays
const lista = [];
lista.push(12, 2, 22, 2, 2);
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transf\u00EArencia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0,
};
console.log(novaTransacao);
