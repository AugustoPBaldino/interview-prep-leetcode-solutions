// Versão otimizada com Map (Hash Table)

// Explicação:

// - A ideia é percorrer o array **uma única vez**.
// - Para cada número `num`, você calcula o **complemento** (`target - num`).
// - Verifica se esse complemento **já foi visto antes** (e armazenado no `Map`).
// - Se sim, encontrou a resposta.
// - Se não, adiciona o `num` atual ao `Map`, com seu índice como valor.

function twoSumOptimizated(nums: number[], target: number): number[] {
    const seen = new Map<number, number>(); // valor -> índice

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }

        seen.set(nums[i], i);
    }

    return [];
}