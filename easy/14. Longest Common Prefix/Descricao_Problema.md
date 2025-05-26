## Problema: Longest Common Prefix

### 📝 Descrição

Implemente uma função que receba um array de strings e retorne **o maior prefixo comum** entre todas as strings do array.

Se não houver nenhum prefixo comum, retorne uma **string vazia** `""`.

---

### 📥 Exemplos

### Exemplo 1:

- **Entrada:** `["flower", "flow", "flight"]`
- **Saída:** `"fl"`

### Exemplo 2:

- **Entrada:** `["dog", "racecar", "car"]`
- **Saída:** `""`
- **Explicação:** Não há nenhum prefixo comum entre as strings fornecidas.

---

### ✅ Restrições

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- Cada `strs[i]` contém apenas **letras minúsculas do alfabeto inglês** (`a`–`z`) se não for vazia.