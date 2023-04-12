let cars = [
    {
        id: 1,
        model: "urus",
        company: "lamborgini",
        price: 266000,
        engineForce: 6.5
    },
    {
        id: 2,
        model: "cheron",
        company: "buggatti",
        price: 500000,
        engineForce: 7
    },
    {
        id: 3,
        model: "malibu 2",
        company: "gm",
        price: 33000,
        engineForce: 2.4
    },
    {
        id: 4,
        model: "gentra",
        company: "gm",
        price: 17000,
        engineForce: 1.5
    },
    {
        id: 5,
        model: "gelen vagen",
        company: "mercedes",
        price: 300000,
        engineForce: 4
    },
    {
        id: 6,
        model: "matiz",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    }
]


let ask = prompt('Привет! С какой компании хотите выбрать машину?')
let arr = cars.filter(i => i.company === ask)
let text = ''
arr.forEach((i) => {
    text += `model: ${i.model}\nprice:${i.price}\n\n `
})
alert(text)

let ask2 = prompt('Какую машину хотите купить?')

if (ask2 === 'malibu 2') {
    prompt('Стоимость 33000')
} else if (ask2 === 'gentra') {
    prompt('Стоимость 17000')
} else if (ask2 === 'matiz') {
    prompt('Стоимость 3000')
} else if (ask2 === 'gelen vagen') {
    prompt('Стоимость 300000')
} else if (ask2 === 'cheron') {
    prompt('Стоимость 500000')
} else if (ask2 === 'urus') {
    prompt('Стоимость 266000')
} else {
    alert('У вас мало денег')
}