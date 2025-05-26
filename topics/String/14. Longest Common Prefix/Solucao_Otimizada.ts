// Versão melhorada utilizando Divisão e Conquista

// 1. Divida o array de strings em duas metades.
// 2. Resolva recursivamente o problema para cada metade, ou seja, encontre o prefixo comum da metade esquerda e da metade direita.
// 3. Conquiste** combinando os dois prefixos resultantes, encontrando o prefixo comum entre eles.

// Funções necessárias

// - Uma função commonPrefix(str1, str2) que retorna o prefixo comum entre duas strings.
// - Uma função divideAndConquer(strs, left, right) que divide e resolve recursivamente.


function longestCommonPrefixOptimizated(strs: string[]): string {
    if (strs.length === 0) return "";

    return divideAndConquer(strs, 0, strs.length - 1);
}

function divideAndConquer(strs: string[], left: number, right: number): string {
    // Caso base: apenas uma string
    if (left === right) {
        return strs[left];
    }

    const mid = Math.floor((left + right) / 2);
    const lcpLeft = divideAndConquer(strs, left, mid);
    const lcpRight = divideAndConquer(strs, mid + 1, right);

    return commonPrefix(lcpLeft, lcpRight);
}

function commonPrefix(str1: string, str2: string): string {
    let minLength = Math.min(str1.length, str2.length);

    for (let i = 0; i < minLength; i++) {
        if (str1[i] !== str2[i]) {
            return str1.slice(0, i);
        }
    }

    return str1.slice(0, minLength);
}
