const ordensProducao = [];

export function cadastrarOrdensProducao(objeto) {
    ordensProducao.push(objeto)
}

export function listarOrdensProducao() {
    for (let i = 0; i < ordensProducao.length; i++) {
        console.log(ordensProducao[i])
    }
}

export function buscarPorIndice(indice) {
    ordensProducao[indice];
}

export function atualizarOrdensProducao(indice, objeto) {
    ordensProducao[indice] = objeto;
}

export function excluirOrdensProducao(indice) {
    ordensProducao.splice(indice, 1);
}