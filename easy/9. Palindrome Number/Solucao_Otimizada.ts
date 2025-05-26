
// Técnica mais otimizada: inverter metade do número

// Essa técnica é usada em problemas clássicos (como no LeetCode) e evita:

// - conversão para string,
// - criação de arrays temporários,
// - uso extra de memória.

function isPalindromeOptimizated(x: number): boolean {
  // Números negativos não são palíndromos
  if (x < 0) return false;

  // Se termina em zero e não é zero, também não é palíndromo (ex: 10, 100)
  if (x % 10 === 0 && x !== 0) return false;

  let revertido = 0;

  // Enquanto a metade invertida for menor que o original
  while (x > revertido) {
    const digito = x % 10;
    revertido = revertido * 10 + digito;
    x = Math.floor(x / 10);
  }

  // Para número com número par de dígitos: x === revertido
  // Para número com número ímpar: x === Math.floor(revertido / 10)
  return x === revertido || x === Math.floor(revertido / 10);
}