const operadores = [];

export function cadastrarOperadores(objeto) {
    operadores.push(objeto)
}

export function listarOperadores() {
    for (let i = 0; i < operadores.length; i++) {
        console.log(operadores[i])
    }
}

export function buscarPorIndice(indice) {
    operadores[indice];
}

export function atualizarOperadores(indice, objeto) {
    operadores[indice] = objeto;
}

export function excluirOperadores(indice) {
    operadores.splice(indice, 1);
}

