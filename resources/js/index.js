let num = parseInt(Math.random() * 168)
let res = parseInt(num * 6)
let urlI = 'https://aeasa.com.mx/wp-content/uploads/2020/02/SIN-IMAGEN.jpg'

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

async function getImagers() {
    for (let i = 0; i < 6; i++) {
        let response = await fetch(urls[i])
        let data = await response.json()
        images.push(data.sprites.front_default)
    }
}

async function main() {
    await getNames()
    await getImagers()

    document.getElementById('n1').innerHTML = names[0]
    document.getElementById('n2').innerHTML = names[1]
    document.getElementById('n3').innerHTML = names[2]
    document.getElementById('n4').innerHTML = names[3]
    document.getElementById('n5').innerHTML = names[4]
    document.getElementById('n6').innerHTML = names[5]

    document.getElementById('img1').src = (images[0] == null ? urlI : images[0])
    document.getElementById('img2').src = (images[1] == null ? urlI : images[1])
    document.getElementById('img3').src = (images[2] == null ? urlI : images[2])
    document.getElementById('img4').src = (images[3] == null ? urlI : images[3])
    document.getElementById('img5').src = (images[4] == null ? urlI : images[4])
    document.getElementById('img6').src = (images[5] == null ? urlI : images[5])
}

main()
