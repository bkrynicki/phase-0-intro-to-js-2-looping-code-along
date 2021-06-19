// Code your solutions in this file
function writeCards(names, event)
{
    let card = []
    for (let i = 0; i < names.length; i++) {
        card.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }

    return card;
}

function countDown ()
{
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown)
        countDown--;
    }
    return countDown;
}