public class Solution {
    public int LengthOfLastWord(string s) {
        int contador = 0;
        bool contando = false;

        for (int i = s.Length - 1; i >= 0; i--) {
            char c = s[i];
            if (c != ' ') {
                contando = true;
                contador++;
            } else if (contando) {
                break;
            }
        }

        return contador;
    }
}
