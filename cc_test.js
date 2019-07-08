function exponent(base, power) {
    if (power === 0) return 1;
    if (power < 0) return 1 / (exponent(base, -power));
    return base * exponent(base, power-1)
}

function letterCombinations(str) {
    let result = []
    if (str.length === 0) return result;
    const combs = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z'],
    }
    letterCombHelp(str, result, combs, "");
    return result;
}
function letterCombHelp(str, result, combs, curr){
    if (str.length === 0){
        result.push(curr);   
        return;
    }
    let number = str[0];
    for(let i = 0; i < combs[number].length; i++){
        letterCombHelp(str.substring(1, str.length), result, combs, curr + combs[number][i]);
    }
}

