Here is a TypeScript solution for the problem:

```typescript
class SentenceReverser {
    reverseWords(sentence: string): string {
        let reversedSentence = '';
        let word = '';
        for (let i = 0; i < sentence.length; i++) {
            if (sentence[i] === ' ') {
                reversedSentence = ' ' + word + reversedSentence;
                word = '';
            } else {
                word += sentence[i];
            }
        }
        reversedSentence = word + reversedSentence;
        return reversedSentence;
    }
}

let sentenceReverser = new SentenceReverser();
console.log(sentenceReverser.reverseWords('Hello World! This is TypeScript.'));
```

This program defines a class `SentenceReverser` with a method `reverseWords` that takes a sentence as input and returns the sentence with the words reversed. The `reverseWords` method iterates over the characters in the sentence. When it encounters a space, it adds the current word followed by a space to the beginning of the reversed sentence, and resets the current word. When it encounters a non-space character, it adds the character to the current word. After the loop, it adds the last word to the beginning of the reversed sentence. The program then creates an instance of `SentenceReverser` and uses it to reverse the words in a sentence.