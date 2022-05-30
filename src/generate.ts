type Cards = {
  imgSrc: string,
  name: string
}
export const cardData = [
  { imgSrc: './src/img/6-Clubs.png', name: '6-Clubs' },
  { imgSrc: './src/img/6-Diamonds.png', name: '6-Diamonds' },
  { imgSrc: './src/img/6-Hearts.png', name: '6-Hearts' },
  { imgSrc: './src/img/6-Spades.png', name: '6-Spades' },
  { imgSrc: './src/img/7-Clubs.png', name: '7-Clubs' },
  { imgSrc: './src/img/7-Diamonds.png', name: '7-Diamonds' },
  { imgSrc: './src/img/7-Hearts.png', name: '7-Hearts' },
  { imgSrc: './src/img/7-Spades.png', name: '7-Spades' },
  { imgSrc: './src/img/8-Clubs.png', name: '8-Clubs' },
  { imgSrc: './src/img/8-Diamonds.png', name: '8-Diamonds' },
  { imgSrc: './src/img/8-Hearts.png', name: '8-Hearts' },
  { imgSrc: './src/img/8-Spades.png', name: '8-Spades' },
  { imgSrc: './src/img/9-Clubs.png', name: '9-Clubs' },
  { imgSrc: './src/img/9-Diamonds.png', name: '9-Diamonds' },
  { imgSrc: './src/img/9-Hearts.png', name: '9-Hearts' },
  { imgSrc: './src/img/9-Spades.png', name: '9-Spades' },
  { imgSrc: './src/img/10-Clubs.png', name: '10-Clubs' },
  { imgSrc: './src/img/10-Diamonds.png', name: '10-Diamonds' },
  { imgSrc: './src/img/10-Hearts.png', name: '10-Hearts' },
  { imgSrc: './src/img/10-Spades.png', name: '10-Spades' },
  { imgSrc: './src/img/Ace-Clubs.png', name: 'Ace-Clubs' },
  { imgSrc: './src/img/Ace-Diamonds.png', name: 'Ace-Diamonds' },
  { imgSrc: './src/img/Ace-Hearts.png', name: 'Ace-Hearts' },
  { imgSrc: './src/img/Ace-Spades.png', name: 'Ace-Spades' },
  { imgSrc: './src/img/Jack-Clubs.png', name: 'Jack-Clubs' },
  { imgSrc: './src/img/Jack-Diamonds.png', name: 'Jack-Diamonds' },
  { imgSrc: './src/img/Jack-Hearts.png', name: 'Jack-Hearts' },
  { imgSrc: './src/img/Jack-Spades.png', name: 'Jack-Spades' },
  { imgSrc: './src/img/King-Clubs.png', name: 'King-Clubs' },
  { imgSrc: './src/img/King-Diamonds.png', name: 'King-Diamonds' },
  { imgSrc: './src/img/King-Hearts.png', name: 'King-Hearts' },
  { imgSrc: './src/img/King-Spades.png', name: 'King-Spades' },
  { imgSrc: './src/img/Queen-Clubs.png', name: 'Queen-Clubs' },
  { imgSrc: './src/img/Queen-Diamonds.png', name: 'Queen-Diamonds' },
  { imgSrc: './src/img/Queen-Hearts.png', name: 'Queen-Hearts' },
  { imgSrc: './src/img/Queen-Spades.png', name: 'Queen-Spades' },
];

export const getRandomElements = function (sourceArray:Array<Cards>, neededElements:number) {
  const result = [];
  for (let i = 0; i < neededElements; i++) {
    const index = Math.floor(Math.random() * sourceArray.length);
    result.push(sourceArray.splice(index, 1)[0]);
  }
  return [...result, ...result];
};

export const shuffle = function (array:Array<object>) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
