export class Maquina {
    #status
    constructor(codigo, nome, setor, status) {
        this.codigo = codigo;
        this.nome = nome;
        this.setor = setor;
        this.#status = "desligada";
    }

    get status() {
        return this.#status;
    }

    ligar(status) {
        this.#status = "ligada";
    }

    desligar(status) {
        this.#status = "desligada";
    }
}