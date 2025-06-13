class Solution {
    public int strStr(String haystack, String needle) {
        // 1. Se needle for vazio, talvez precise retornar 0
        if(needle.isEmpty()){
            return 0;
        }
        // 2. Laço: percorra haystack até onde needle ainda "cabe"
        for(int i = 0; i <= haystack.length() - needle.length(); i++){
            // 3. Compare substrings com needle
            if(haystack.substring(i,i + needle.length()).equals(needle)){
            // 4. Se encontrar, retorne a posição
                return i;
            }
        }
    return -1;
    }
}