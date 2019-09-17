import { number } from "prop-types";

/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit{
  Clubs,
  Diamonds,
  Hearts,
  Spades
};

export enum CardNumber {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King
};

type Card = [Suit, CardNumber]


// let c : Card = [Suit.Clubs, CardNumber.Seven];
function createDeck() : Card[] {
  let cards : Card[] = [];
  let lenghtOfCards : number = Object.keys(CardNumber).length / 2;
  let lenghtOfSuit : number = Object.keys(Suit).length / 2;

  for (let s = 0; s < lenghtOfSuit; s++) {
    for (let c = 0; c < lenghtOfCards; c++) {
      cards.push([s, c]);
    }
  }

  return cards;
}


export class Dealer {
  cards : Card[] = [];

  constructor() {
    // Set initial deck of cards.
    this.cards = createDeck();
    shuffleArray(this.cards);
  }

  dealHand(numberOfCards: number) : Card[] {
    let cards = this.cards.splice(this.getLength() - numberOfCards, numberOfCards);
    return cards;
  }

  getLength() : number {
   return this.cards.length;
  }

  readCard(card: Card) : string {
    let [suit, numberOfCard] = card;
    return `${CardNumber[numberOfCard]} of ${Suit[suit]}`;
  }
}


let newGame = new Dealer();
const hand = newGame.dealHand(5);
console.log(hand);
console.log(newGame.readCard(hand[0]));
