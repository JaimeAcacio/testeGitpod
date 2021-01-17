export default function createGame(){
const state = {
    screen:{
        width:10,
        height:10
    },
    players:{},
    moviments : {
        ArrowUp :(player)=>player.y = player.y -1 >= 0 
            ? player.y - 1
            : player.y,
        ArrowDown :(player)=>player.y = player.y +1 < state.screen.width
            ? player.y +1
            :player.y,
        ArrowLeft :(player)=>player.x = player.x -1 >= 0
            ? player.x -1
            :player.x,
        ArrowRight :(player)=>player.x = player.x +1 < state.screen.width
            ?player.x +1
            :player.x
    }
}

 function movePlayer(comand){
    const keyPressed = comand.keyPressed
    const player = state.players[comand.playerId]
    const moviments = state.moviments

    if(moviments[keyPressed]){
    moviments[keyPressed](player)
    }
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

  function removePlayer(comand){
    const playerId = comand.playerId
    delete state.players[playerId]
}
return{
    state,
    movePlayer,
    addPlayer,
    removePlayer
    }
}