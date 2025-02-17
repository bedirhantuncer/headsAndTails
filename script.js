//create heads and tails variables and reset on the beggining

let heads = 0;
let tails = 0;

//choose coin , flip ve reset button wich inclouds in html

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector(".flip-button");
let resetBtn = document.querySelector(".reset-button");

//when click flip button, flip function will be called

flipBtn.addEventListener("click", () => {
  let i =Math.floor( Math.random() * 2);


  coin.style.animation = "none";


  if(i){
    setTimeout(() => {        
        coin.style.animation = "spin-heads 3s forwards";
    
    }, 100);
    heads++;
  }else{
    setTimeout(() => {
        coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tails++;
  }


  //update the heads and tails values
  setTimeout(updateStats, 3000);
  disableButton();

});

function updateStats() {
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`; 
}

function disableButton() {
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false;
    }, 3000);
    }


resetBtn.addEventListener("click", () => {

    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
  }); 