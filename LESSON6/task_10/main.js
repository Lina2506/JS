// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const suits = ['spade', 'diamond', 'heart', 'clubs'] ;
const values= ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit==='spade'||suit==='clubs'){
            card.color = 'black';
        }else {
            card.color = 'red';
        }
        cards.push(card);
    }
}
console.log(cards);

const reduce=cards.reduce((accum,card)=>{
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
            case 'diamond':
            accum.diamonds.push(card);
            break;
            case 'heart':
            accum.hearts.push(card);
            break;
            case 'clubs':
            accum.clubs.push(card);
            break;
    }
    return accum;
}, {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
});
console.log(reduce);