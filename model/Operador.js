export class Operador {
    #status
    constructor(matricula, nome, funcao, turno, status) {
        this.matricula = matricula;
        this.nome = nome;
        this.funcao = funcao;
        this.turno = turno;
        this.#status = "ativo";
    }

    get status() {
        return this.#status;
    }

    ativar(status) {
        this.#status = "ativo";
    }

    desativar(status) {
        this.#status = "inativo";
    }

}