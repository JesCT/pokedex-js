let num = parseInt(Math.random() * 168)
let res = parseInt(num * 6)
let urlI = '/resources/imgs/sin-imagen.jpg'

let names = []
let urls = []
let images = []

async function getNames() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${res}&limit=6`)
    let data = await response.json()

    for (let i = 0; i < 6; i++) {
        names.push(data.results[i].name)
        urls.push(data.results[i].url)
    }
}

async function getImages() {
    for (let i = 0; i < 6; i++) {
        let response = await fetch(urls[i])
        let data = await response.json()
        images.push(data.sprites.front_default)
    }
}

async function main() {
    await getNames()
    await getImages()

    for (let i = 0; i < names.length; i++) {
        document.getElementById(`n${i}`).innerHTML = names[i]
        document.getElementById(`img${i}`).src = (images[i] == null ? urlI : images[i])
    }
}

main()