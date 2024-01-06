```cpp
#include <iostream>
#include <string>
#include <vector>

std::vector<std::string> splitString(const std::string& str) {
    std::vector<std::string> words;
    std::string word = "";
    for (auto ch : str) {
        if (ch == ' ') {
            if (!word.empty()) {
                words.push_back(word);
                word = "";
            }
        } else {
            word += ch;
        }
    }
    if (!word.empty()) {
        words.push_back(word);
    }
    return words;
}

std::string reverseWords(const std::string& str) {
    std::vector<std::string> words = splitString(str);
    std::string reversed = "";
    for (int i = words.size() - 1; i >= 0; --i) {
        reversed += words[i] + " ";
    }
    if (!reversed.empty()) {
        reversed.pop_back();
    }
    return reversed;
}

int main() {
    std::string str;
    std::cout << "Enter a sentence: ";
    std::getline(std::cin, str);
    std::cout << "Reversed sentence: " << reverseWords(str) << std::endl;
    return 0;
}
```