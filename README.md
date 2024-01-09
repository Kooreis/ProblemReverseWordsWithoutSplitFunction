# Question: How do you reverse the words in a sentence without using built-in split functions? JavaScript Summary

The JavaScript code provided defines a function named `reverseWordsInSentence` that reverses the order of words in a given sentence without using the built-in split function. The function works by initializing an empty array `words` and an empty string `currentWord`. It then iterates over each character in the input sentence. If the character is a space, it pushes the `currentWord` into the `words` array and resets `currentWord` to an empty string. If the character is not a space, it appends the character to `currentWord`. After the loop, it pushes the last word into the `words` array. The function then reverses the `words` array and joins the words into a string with spaces in between. The reversed sentence is then printed to the console. This way, the function solves the problem of reversing the words in a sentence without using the built-in split function.

---

# TypeScript Differences

The TypeScript version solves the problem in a similar way to the JavaScript version, but with a few key differences:

1. Use of Classes: The TypeScript version uses a class `SentenceReverser` to encapsulate the logic for reversing the words in a sentence. This is a feature of TypeScript's support for object-oriented programming, which is not used in the JavaScript version.

2. Method Signature: The `reverseWords` method in the TypeScript version has a specific signature: it takes a string as input and returns a string. This is a feature of TypeScript's static typing, which is not present in JavaScript.

3. Different Approach to Reversing Words: The JavaScript version first collects all the words in an array, then reverses the array and joins the words into a string. The TypeScript version, on the other hand, builds the reversed sentence directly by prepending each word to the beginning of the reversed sentence. This avoids the need for an array and the built-in `reverse` and `join` methods.

4. Handling the Last Word: In the JavaScript version, the last word is added to the array after the loop. In the TypeScript version, the last word is added to the beginning of the reversed sentence after the loop. This is a minor difference in how the two versions handle the last word in the sentence.

Overall, the TypeScript version uses more features of the language (classes and static typing) and a slightly different approach to solve the problem.

---

# C++ Differences

The C++ version of the solution also defines a function to reverse the words in a sentence, but it does so in two separate functions: `splitString` and `reverseWords`. 

The `splitString` function is similar to the JavaScript function in that it iterates over each character in the input string, building up words by concatenating characters until a space is encountered. When a space is encountered, the current word is added to a vector of words and the current word is reset. This function also checks if the word is empty before adding it to the vector, which is a difference from the JavaScript version.

The `reverseWords` function takes the vector of words returned by `splitString`, and constructs a reversed sentence by iterating over the vector in reverse order and concatenating each word with a space. It also removes the trailing space at the end of the reversed sentence.

The C++ version uses the `std::vector` and `std::string` classes from the C++ Standard Library, which are similar to JavaScript's Array and String types. It also uses the range-based for loop and the auto keyword, which are features not available in JavaScript.

The C++ version also includes a `main` function that prompts the user to enter a sentence, calls the `reverseWords` function with the user's input, and prints the reversed sentence. This interactive feature is not present in the JavaScript version.

In summary, the C++ version solves the problem in a similar way to the JavaScript version, but it does so in a more modular way by separating the splitting and reversing operations into separate functions. It also includes additional error checking and user interaction. The main differences are due to the different features and libraries available in C++ and JavaScript.

---
