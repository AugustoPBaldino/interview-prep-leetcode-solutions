## 🧩 Problema: Valid Parentheses

### 📄 Descrição

Dada uma string `s` contendo apenas os caracteres `'('`, `')'`, `'{'`, `'}'`, `'['` e `']'`, determine se a string é **válida**.

Uma string é considerada **válida** se:

- Os parênteses de abertura forem **fechados pelo mesmo tipo** de parêntese.
- Os parênteses forem fechados na **ordem correta**.
- Todo parêntese de **fechamento** tiver um **correspondente de abertura** válido.

---

### 📥 Exemplos

### ✅ Exemplo 1

- **Entrada:** `s = "()"`
- **Saída:** `true`

### ✅ Exemplo 2

- **Entrada:** `s = "()[]{}"`
- **Saída:** `true`

### ❌ Exemplo 3

- **Entrada:** `s = "(]"`
- **Saída:** `false`

### ✅ Exemplo 4

- **Entrada:** `s = "([])"`
- **Saída:** `true`

---

### 🔒 Restrições

- `1 <= s.length <= 10⁴`
- A string `s` contém apenas os caracteres: `'('`, `')'`, `'{'`, `'}'`, `'['`, `']'`.