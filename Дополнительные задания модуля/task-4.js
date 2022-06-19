const isPalindrome = (str) => {
    str = str.replace(' ','').toLowerCase();
    const newStr = str.split("").reverse().join("");
    if (newStr === str) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("programmer")); // false
