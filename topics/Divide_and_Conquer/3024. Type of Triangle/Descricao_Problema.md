### 📌 Problema: **Tipo de Triângulo**

Você recebe um array de inteiros `nums` com exatamente 3 elementos, representando os comprimentos dos lados de um triângulo.

O objetivo é **determinar o tipo de triângulo** que pode ser formado com esses três lados. Retorne uma `String` com o nome do tipo ou `"none"` se os lados **não puderem formar um triângulo válido**.

### 🟨 Regras de classificação:

- **"equilateral"** – todos os lados têm o mesmo comprimento.
- **"isosceles"** – exatamente dois lados têm o mesmo comprimento.
- **"scalene"** – todos os lados têm comprimentos diferentes.
- **"none"** – os lados **não formam um triângulo válido**.

### 🟧 Observação:

Para que três lados formem um triângulo válido, **a soma de qualquer dois lados deve ser maior que o terceiro**:

- `a + b > c`
- `a + c > b`
- `b + c > a`

---

### ✅ Exemplos:

### Exemplo 1:

```java
Input:  nums = [3, 3, 3]
Output: "equilateral"

```

Explicação: Todos os lados têm o mesmo comprimento, portanto o triângulo é equilátero.

---

### Exemplo 2:

```java
Input:  nums = [3, 4, 5]
Output: "scalene"

```

Explicação:

- 3 + 4 > 5
- 3 + 5 > 4
- 4 + 5 > 3
    
    Como todas as somas são maiores que o terceiro lado, é um triângulo válido.
    
    Como todos os lados têm comprimentos diferentes, é escaleno.
    

---

### Exemplo 3:

```java
Input:  nums = [8, 4, 2]
Output: "none"

```

Explicação: 4 + 2 = 6, que **não é maior que 8**, logo não é possível formar um triângulo.
