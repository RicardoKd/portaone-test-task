import { MOCK_INPUT, TEXT_TO_WORDS_REGEX, ERRORS } from './constants.js';

const countLettersInWord = (word) => {
  const letters = Object.values(word);

  return letters.reduce(
    (acc, letter) => ({
      ...acc,
      [letter]: letter in acc ? acc[letter] + 1 : 1,
    }),
    {}
  );
};

const findFirstSingleLetter = (countedLetters) => {
  for (const letter in countedLetters) {
    if (countedLetters[letter] === 1) {
      return letter;
    }
  }

  // TODO: handle situation when no single letters found
  return null;
};

const algorithm = (text) => {
  if (!text) {
    throw new Error(ERRORS.EMPTY_TEXT);
  }

  const words = text.split(TEXT_TO_WORDS_REGEX);

  const noEmptyWords = words.filter((value) => value !== '');

  const firstSingleLettersOfWords = noEmptyWords.map((word) => {
    const countedLettersInWord = countLettersInWord(word);

    return findFirstSingleLetter(countedLettersInWord);
  });

  const countedLetters = countLettersInWord(firstSingleLettersOfWords.join(''));

  let firstSingleLetter = findFirstSingleLetter(countedLetters);

  return firstSingleLetter;
};

console.log(`Test #1: ${algorithm(MOCK_INPUT[0])}`); // Expected: m
console.log(`Test #2: ${algorithm(MOCK_INPUT[1])}`); // Expected: e
