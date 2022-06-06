class Dictionary {
    #name
    #words
    constructor(name) {
        this.#name = name;
        this.#words = {};
    }

    get mainName() {
        return this.#name;
    }

    set setMainName(name) {
        this.#name = name;
    }

    get allWords() {
        return this.#words;
    }

    add(word, description) {
        if (!this.allWords.hasOwnProperty(word))//if (!(word in this.allWords)) {
        {
            const objWord = {
                word,
                description,
            }
            this.addNewWord(word, objWord);
        }
    }

    addNewWord(wordKey, wordObj) {
        this.allWords[wordKey] = wordObj;
    }

    remove(words) {
        delete this.allWords[words]
    }
    get (words) {
        console.log(this.allWords[words]);
    }
    showAllWords() {
        for (let key in this.allWords) {
        console.log(`${this.allWords[key].word} - ${this.allWords[key].description}`);
        }
    }

}

class HardWordsDictionary extends Dictionary {

    add(word, description) {
        if (!this.allWords.hasOwnProperty(word))//if (!(word in this.allWords)) {
        {
            const objWord = {
                word,
                description,
                isDifficult: true
            }
            this.addNewWord(word, objWord);
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
// дилетант и квант
