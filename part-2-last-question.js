const base_url = 'http://deckofcardsapi.com/api/deck'
const deck = {}


$(document).ready(function () {
    axios.get(`${base_url}/new/shuffle/?deck_count=1`)
        .then(data => {
            deck['deck_id'] = data.data.deck_id;
            deck['remaining'] = data.data.remaining
        })
})

$('button').click(function () {
    axios.get(`${base_url}/${deck['deck_id']}/draw/?count=1`)
        .then(res => {
            $('h1').text(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
        })
    deck['remaining'] -= 1
    $('h3').text(`Cards remaing: ${deck['remaining']}`)
})