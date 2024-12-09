function getLuckyBlock(){//toma game_probability para obtener un valor aleatorio, verdaderamente aleatorio y probabiloso
        var arrData=[];
        for (var i = 0; i < game_probability.length; i++) {
            for (var j = 0; j < game_probability[i]; j++) {
                arrData.push((i+1));
            }
        }
        arrData=shuffle(arrData);

        return arrData[randomIntFromInterval(0, arrData.length-1)];
    
}


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function pause(){
    game.pause();
}

function resume(){
    game.resume();
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
} 

function deleteUserFromArray(toDelete){
    for (var i = 0; i < users.length; i++) {
        if (toDelete==users[i].nombre) {
            users.splice(i,1);
            break;
        }
        
    }
    
}

function endGame(){
    document.getElementById("btn_credits").classList.add("hidden");
    setTimeout(()=>{
        location.reload();
    },5000)
    console.log("activando relays");
    activateRelay((prizes-1))  
}

function activateRelay(counter){
    //relay1.toggle();
    ball_up.play();
    console.log("activate");
    if (counter>0) {
        counter--;
        setTimeout(()=>{
            activateRelay(counter)
        },1000);
        
    }

}