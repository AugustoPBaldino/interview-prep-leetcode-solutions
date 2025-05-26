Dado um array de números inteiros `nums` e um inteiro `target`, escreva uma função que retorne os **índices de dois números** do array cuja soma seja igual a `target`.

Você pode assumir que **sempre existirá exatamente uma solução válida** e **não é permitido usar o mesmo elemento duas vezes**.

A resposta pode ser retornada em **qualquer ordem**.

---

### 📥 Entrada

- Um array de inteiros `nums` com comprimento entre `2` e `10⁴`.
- Um número inteiro `target`.

---

### 📤 Saída

- Um array com dois inteiros representando os **índices** dos elementos cuja soma é igual a `target`.

---

### ✅ Exemplos

**Exemplo 1:**

```
Entrada: nums = [2, 7, 11, 15], target = 9
Saída: [0, 1]
Explicação: nums[0] + nums[1] = 2 + 7 = 9

```

**Exemplo 2:**

```
Entrada: nums = [3, 2, 4], target = 6
Saída: [1, 2]

```

**Exemplo 3:**

```
Entrada: nums = [3, 3], target = 6
Saída: [0, 1]

```

---

### 🔒 Restrições

- `2 <= nums.length <= 10⁴`
- `10⁹ <= nums[i] <= 10⁹`
- `10⁹ <= target <= 10⁹`
- Existe **apenas uma solução válida**.