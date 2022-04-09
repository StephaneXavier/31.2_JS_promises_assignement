const BASE_URL = 'http://deckofcardsapi.com/api/deck'

// Part 1
// *************OPTION 1****************

// axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`)
//     .then(res => {
//         // console.log(res.data.deck_id)
//         return res.data.deck_id
//     })
//     .then(res => {
//         // console.log('second .then =>', res)
//         return axios.get(`${BASE_URL}/${res}/draw/?count=1`)
//     })
//     .then(res => {
//         console.log('Third .then =>', res)
//         console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
//     })

// *****************OPTION 2******************
// axios.get(`${BASE_URL}/new/draw/?count=1`)
//     .then(res => {
//         console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
//     })



// Part 2
// ****************OPTION 1**********************
// $.getJSON(`${BASE_URL}/new/draw`, function (data) {
//     let firstCard = data.cards[0]

//     let deckID = data.deck_id
//     $.getJSON(`${BASE_URL}/${deckID}/draw`, function (data) {
//         let secondCard = data.cards[0];
//         [firstCard, secondCard].forEach(card => {
//             console.log(
//                 `${card.value} of ${card.suit}`
//             )
//         })
//     })

// })

// *******************OPTION 2******************
const drawnCards = []
axios.get(`${BASE_URL}/new/draw/?count=1`)
    .then(data => {
        // get the data from the first drawn card (which created new deck at same time) and push it
        // to the drawnCards array
        // console.log(data)
        drawnCards.push(data)
        return data.data.deck_id
    })
    .then(deck_id => {
        // return the new fulfilled card object 
        // console.log(deck_id)
        return axios.get(`${BASE_URL}/${deck_id}/draw`)
    })
    .then(secondCard => {
        // that second card, add it to the drawnCards. Then console.log each card in the array.
        console.log(secondCard)
        drawnCards.push(secondCard)
        drawnCards.forEach(card => {
            console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
        })
    })





