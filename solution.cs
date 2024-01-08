for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            words.push(currentWord);
            currentWord = '';
        } else {
            currentWord += sentence[i];
        }
    }