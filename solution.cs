Here is a JavaScript console application that reverses the words in a sentence without using the built-in split function:

```javascript
function reverseWordsInSentence(sentence) {
    let words = [];
    let currentWord = '';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            words.push(currentWord);
            currentWord = '';
        } else {
            currentWord += sentence[i];
        }
    }
    words.push(currentWord);
    return words.reverse().join(' ');
}

console.log(reverseWordsInSentence('Hello World! This is a test sentence.'));
```

This script defines a function `reverseWordsInSentence` that takes a sentence as input, iterates over each character in the sentence, and builds up words by concatenating characters until a space is encountered. When a space is encountered, the current word is added to an array of words and the current word is reset. After all words have been added to the array, the array is reversed and joined into a string with spaces between each word. The reversed sentence is then logged to the console.