const MOCK_INPUT = [
  "The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. — Geoffrey James, 'The Tao of Programmin'",
  'C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup',
];

const TEXT_TO_WORDS_REGEX = /[!?().;:"'_—\-\+ ]+/;

const ERRORS = {
  EMPTY_TEXT: 'Text cannot be empty',
};

export { MOCK_INPUT, TEXT_TO_WORDS_REGEX, ERRORS };
