export default function createGame(){
const state = {
color : 'black',
players : {},
fruits:{}
}

  function addPlayer(comand){
    const playerId = comand.playerId
    const playerX = comand.playerX
    const playerY = comand.playerY

    state.players[playerId] = {
        x:playerX,
        y:playerY
    }
}

  function removePlayer(){
    const playerId = comand.playerId
    delete state.players[playerId]
}


function addFruit(comand){
    const fruitId = comand.fruitId
    const fruitX = comand.fruitX
    const fruitY = comand.fruitY

    state.fruits[fruitId] = {
        x:fruitX,
        y:fruitY
    }
}

function removeFruit(){
    const fruitId = comand.fruitId
    delete state.fruits[fruitId]
}


    function movePlayer(comand){
        const keyPressed = comand.keyPressed
        const player = state.players[comand.playerId]

        console.log(player)
        const moviments = {
            ArrowUp : (player)=>player.y = player.y - 1,
            ArrowDown :(player)=>player.y = player.y +1,
            ArrowLeft :(player)=>player.x = player.x -1 ,
            ArrowRight :(player)=>player.x = player.x +1
}
    if(moviments[keyPressed]){
    moviments[keyPressed](player)
        }
    }
    return {
        addPlayer,
        removePlayer,
        addFruit,
        removeFruit,
        movePlayer,
        state
    }
}