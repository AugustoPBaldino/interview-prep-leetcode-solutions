class Solucao20 {
    public boolean isValid(String s) {
        // Enquanto a string contiver algum par válido, remova
        while (s.contains("()") || s.contains("[]") || s.contains("{}")) {
            s = s.replace("()", "");
            s = s.replace("[]", "");
            s = s.replace("{}", "");
        }

        // Se sobrou algo, é inválido
        return s.isEmpty();
    }
}