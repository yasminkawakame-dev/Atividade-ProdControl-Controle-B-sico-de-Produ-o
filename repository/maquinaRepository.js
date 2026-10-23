const maquinas = [];

export function cadastrarMaquina(objeto) {
    maquinas.push(objeto)
}

export function listarMaquinas() {
    for (let i = 0; i < maquinas.length; i++) {
        console.log(maquinas[i])
    }
}

export function buscarPorIndice(indice) {
    maquinas[indice];
}

export function atualizarMaquinas(indice, objeto) {
    maquinas[indice] = objeto;
}

export function excluirMaquinas(indice) {
    maquinas.splice(indice, 1);
}

j