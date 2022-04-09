const BASE_URL = 'http://numbersapi.com'


let numbers = [1, 2, 3]

// Part 1
$.getJSON(`${BASE_URL}/5/?json`).then(data => {
    console.log(data);
    $("#part-1").text(data.text)
});


// Part 2

$.getJSON(`${BASE_URL}/7,8,9/?json`).then(data => {
    console.log(data);
})

// Part 3


// **************OPTION 1***************
// for (let i = 0; i < 4; i++) {
//     numFacts.push($.getJSON(`${BASE_URL}/3/?json`))
//     console.log(`round ${i}`)
//     console.log(numFacts)
// }

// Promise.all(numFacts).then(numArr => (

//     // numArr.forEach(n => console.log(n.text))
//     numFacts.forEach(fact => $('body').append(`<p>${fact.responseJSON.text}</p>`))
// ))

// ****************OPTION 2 *******************

// let numFacts = [];
// for (let i = 0; i < 5; i++) {
//     numFacts.push(axios.get(`${BASE_URL}/3/?json`))
// }

// Promise.all(numFacts).then(facts =>
//     facts.forEach(fact => $('body').append(`<p>${fact.data.text}</p>`))

// )


// ****************OPTION 3********************
Promise.all(
    Array.from({ length: 4 }, () => {
        return axios.get(`${BASE_URL}/3/?json`)
    })
).then(facts => {
    facts.forEach(fact => $('body').append(`<p>${fact.data.text}</p>`))
})