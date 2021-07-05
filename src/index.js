import music from './bands.json'

import './main.css'

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.getElementById('cards')
    const aboutmusic = music.data
    console.log(music);

    aboutmusic.forEach(musics => {
        let cardDOM = buildCardDOM(musics)
        cards.insertAdjacentHTML('beforeend', cardDOM) 
      })
})
function buildCardDOM(musics) {
    return (
        `<div class="playlist">
            <img src="${music.image_base_url.replace(`xxxARTIST-IDxxx`,musics.art_id)}" alt="#">
            <h1>${musics.album_title}</h1>
            <h2>${musics.artist_title}</h2>
            <h3>${musics.genre_text}</h3>
        </div>`
    )
}
// image_base_url: "https://f4.bcbits.com/img/axxxARTIST-IDxxx_9.jpg"
// album_title:"Through the Soil"
// artist_title:"various Artists"
// genre_text:"alternative"
// art_id: 1881977079