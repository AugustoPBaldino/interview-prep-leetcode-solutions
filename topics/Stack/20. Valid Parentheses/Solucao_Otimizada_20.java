import java.util.Stack;

// Solução Otimizada

// A estrutura de pilha (Stack) é a chave para resolver o problema Valid Parentheses de forma eficiente e correta, porque ela reflete exatamente o comportamento de **abertura e fechamento aninhado de parênteses**.

// ---

// Por que usar pilha?

// A pilha é uma estrutura **LIFO (Last In, First Out)**, ou seja, o **último elemento adicionado é o primeiro a sair** — o que casa perfeitamente com a lógica de parênteses:

// > Toda vez que abrimos um parêntese, ele deve ser fechado depois que os internos forem fechados.
// 

class Solucao_Otimizada_20 {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '[') stack.push(']');
            else if (c == '{') stack.push('}');
            else {
                // Se a pilha está vazia ou o topo não é o esperado
                if (stack.isEmpty() || stack.pop() != c) {
                    return false;
                }
            }
        }

        // Pilha deve estar vazia no final
        return stack.isEmpty();
    }
}