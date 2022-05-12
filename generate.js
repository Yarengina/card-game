const cardData = [
    { imgSrc: "./img/6-Clubs.png", name: "6-Clubs" },
    { imgSrc: "./img/6-Diamonds.png", name: "6-Diamonds" },
    { imgSrc: "./img/6-Hearts.png", name: "6-Hearts" },
    { imgSrc: "./img/6-Spades.png", name: "6-Spades" },
    { imgSrc: "./img/7-Clubs.png", name: "7-Clubs" },
    { imgSrc: "./img/7-Diamonds.png", name: "7-Diamonds" },
    { imgSrc: "./img/7-Hearts.png", name: "7-Hearts" },
    { imgSrc: "./img/7-Spades.png", name: "7-Spades" },
    { imgSrc: "./img/8-Clubs.png", name: "8-Clubs" },
    { imgSrc: "./img/8-Diamonds.png", name: "8-Diamonds" },
    { imgSrc: "./img/8-Hearts.png", name: "8-Hearts" },
    { imgSrc: "./img/8-Spades.png", name: "8-Spades" },
    { imgSrc: "./img/9-Clubs.png", name: "9-Clubs" },
    { imgSrc: "./img/9-Diamonds.png", name: "9-Diamonds" },
    { imgSrc: "./img/9-Hearts.png", name: "9-Hearts" },
    { imgSrc: "./img/9-Spades.png", name: "9-Spades" },
    { imgSrc: "./img/10-Clubs.png", name: "10-Clubs" },
    { imgSrc: "./img/10-Diamonds.png", name: "10-Diamonds" },
    { imgSrc: "./img/10-Hearts.png", name: "10-Hearts" },
    { imgSrc: "./img/10-Spades.png", name: "10-Spades" },
    { imgSrc: "./img/Ace-Clubs.png", name: "Ace-Clubs" },
    { imgSrc: "./img/Ace-Diamonds.png", name: "Ace-Diamonds" },
    { imgSrc: "./img/Ace-Hearts.png", name: "Ace-Hearts" },
    { imgSrc: "./img/Ace-Spades.png", name: "Ace-Spades" },
    { imgSrc: "./img/Jack-Clubs.png", name: "Jack-Clubs" },
    { imgSrc: "./img/Jack-Diamonds.png", name: "Jack-Diamonds" },
    { imgSrc: "./img/Jack-Hearts.png", name: "Jack-Hearts" },
    { imgSrc: "./img/Jack-Spades.png", name: "Jack-Spades" },
    { imgSrc: "./img/King-Clubs.png", name: "King-Clubs" },
    { imgSrc: "./img/King-Diamonds.png", name: "King-Diamonds" },
    { imgSrc: "./img/King-Hearts.png", name: "King-Hearts" },
    { imgSrc: "./img/King-Spades.png", name: "King-Spades" },
    { imgSrc: "./img/Queen-Clubs.png", name: "Queen-Clubs" },
    { imgSrc: "./img/Queen-Diamonds.png", name: "Queen-Diamonds" },
    { imgSrc: "./img/Queen-Hearts.png", name: "Queen-Hearts" },
    { imgSrc: "./img/Queen-Spades.png", name: "Queen-Spades" },
];

const getRandomElements = function(sourceArray, neededElements) {
    const result = [];
    for (let i = 0; i < neededElements; i++) {
        const index = Math.floor(Math.random() * sourceArray.length);
        result.push(sourceArray.splice(index, 1)[0]);
    }
    return [...result, ...result];
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
};