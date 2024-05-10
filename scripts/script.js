import { Character } from './Character.js'

const container = document.getElementById("main-container")

async function getCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    const characters = data.results.map(element => parseJsonToCharacter(element))
    renderAllCharacters(characters)
}

function parseJsonToCharacter(element) {
    return new Character(
        element.name,
        element.image,
        element.status,
        element.species,
        element.location.name
    )
}

function renderAllCharacters(characters) {
    characters.forEach(character => {
        container.innerHTML += character.toHtml()
    })
}

getCharacters()