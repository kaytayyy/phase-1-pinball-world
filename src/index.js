const baseUrl = 'http://localhost:3000/'
const gamesUrl = baseUrl + 'games'

const fetchGames = () => 
    fetch(gamesUrl)
    .then(r => r.json())
    .then(gamesData => renderGames(gamesData))

fetchGames()


const renderGames = games => {
    renderGameDetails(games[0])
    const gameListNav = document.getElementById('game-list')

    games.forEach(game => {
        const gameNameH5 = document.createElement('h5')
        gameListNav.appendChild(gameNameH5)

        gameNameH5.textContent = `${game.name} (${game.manufacturer_name})`

        gameNameH5.onclick = () => {
            renderGameDetails(game)
        }
    })
}

const renderGameDetails = game => {
    const gameDetailsImage = document.getElementById('detail-image')
    gameDetailsImage.src = game.gameDetailsImage

    const gameTitleH2 = document.getElementById('detail-title')
    gameTitleH2.textContent = game.name

    const gameHighScoreSpan = document.getElementById('detail-high-score')
    gameHighScoreSpan.textContent = game.high_score


    const highScoreForm = document.getElementById('high-score-form')
    highScoreForm.addEventListener('submit', function (event){
        event.preventDefault()
        const scoreInput = document.getElementById('score-input').value

        game.high_score = parseInt(scoreInput)
        gameHighScoreSpan.textContent = game.high_score

        highScoreForm.reset()
    })
}



// highScoreForm.onSubmit = (event) => {
//     event.preventDefault()
// }