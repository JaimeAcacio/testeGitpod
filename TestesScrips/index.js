import createGame from './game.js'
const game = createGame()

const screen = document.getElementById('screen')
const context = screen.getContext('2d')


//game.addPlayer({playerId:'player1',playerX:0,playerY:0})


document.addEventListener('keydown',handleKeydown)
function handleKeydown(event){
    console.log(event.key)
    const keyPressed = event.key
    const comand = {
        playerId:"player1",
        keyPressed
    }
    game.movePlayer(comand)
    }
    

renderScreen()

function renderScreen(){
    //limpa a tela pra renderizar uma nova
    context.fillStyle = 'white'
    context.clearRect(0,0,10,10)
    //
    for (const playerId in game.state.players){
        const player = game.state.players[playerId]
        context.fillStyle = game.state.color
        context.fillRect(player.x,player.y,1,1)
    }
    for(const fruitId in game.state.fruits){
        const fruit = game.state.fruits[fruitId]
        context.fillStyle = 'green'
        context.fillRect(fruit.x,fruit.y,1,1)
    }
    //funcao do canvas chamando a propria funcao
    requestAnimationFrame(renderScreen)
}

