export class OrdemProducao {
    #status
    constructor(numero, produto, quantidade, prazo, status) {
        this.numero = numero;
        this.produto = produto;
        this.quantidade = quantidade;
        this.prazo = prazo;
        this.#status = "pendente";
    }

    get status() {
        return this.#status;
    }

    iniciar(status) {
        this.#status = "produção";
    }

    concluir(status) {
        this.#status = "concluída";
    }

}