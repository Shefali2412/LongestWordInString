// Tuesday: Find the longest Word in a String

// Algorithm 
// I/O: string
// O/P: number
// make function 
// inside function 
// make a variable to store array using split
// make a variable to store longest word length
// use for loop 
// inside for make a variable
// use if to compare 
// return longest length
// print 

function findLongestWord(sentence) {
    let words = sentence.split(" "); // The split() method splits a string into an array of substrings,returns the new array, does not change the original string,If (" ") is used as separator, the string is split between words.
    let longestWordLength = 0;

    for(let i = 0; i < words.length; i++)
    {
        let word = words[i];

        if(word.length > longestWordLength){
            longestWordLength = word.length;
        }
    }
    return longestWordLength;
}

let result1 = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(result1); // Should return 6

let result2 = findLongestWord("May the force be with you");
console.log(result2); // Should return 5



