//remove repeated elements in a array
function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let num of arr) {
        if (!uniqueArray.includes(num)) {
            uniqueArray.push(num);
        }
    }
    return uniqueArray;
}

let numbers = [5, 7, 7, 8, 9, 5, 10];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); 

//palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   
// raghunandan.kv@kgkite.ac.in