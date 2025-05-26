function isPalindrome(x: number): boolean {
    if (x<0) return false;
    
    const str = x.toString();
    const reverso = str.split('').reverse().join('');

    return str === reverso;
};