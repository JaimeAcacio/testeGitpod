export default function createKeyboardListener(){
    const state = {
        observers:[]
    }
    function subscribe(observerfunction){
        state.observers.push(observerfunction)
        }
    function notifyAll(comand){
        console.log
        (`Notifying ${state.observers.length} observers`)
    
        for (const observerfunction of state.observers){
          observerfunction(comand)
      }
    }

document.addEventListener('keydown',handleKeydown)
function handleKeydown(event){
    console.log(event.key)
    const keyPressed = event.key
    
    const comand = {
        playerId:'player1',
        keyPressed
    }
    notifyAll(comand)
    }
    return{
        subscribe
    }
}