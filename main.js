// Write a function that takes in an array of cards, and returns the last card with the highest sum of digits
// This was the entrance question for my g48 Galvanize cohort (Feb 2017) ✨

const cards = [
  '4567456745674567',
  '1234-1234-1234-1234',
  '2345-2345-2345-2345',
  '3456345634563456',
  '456-74-5674-56745-67',
]

function highestCardSum (cardArr) {
  let higestCard = ''
  let highestSum = 0

  cardArr.forEach(card => {
    let currentSum = 0

    for (var i = 0; i < card.length; i++) {        
      if (card[i] !== '-') {
        currentSum += parseInt(card[i])
      }
    }
      
    if (currentSum >= highestSum) {
      highestSum = currentSum
      higestCard = card
    }
  })

  return higestCard
}

console.log('The highest sum credit card is: ' + highestCardSum(cards))