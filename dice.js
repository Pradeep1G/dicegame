

const x=["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png" ];
var y=Math.floor(Math.random()*6);
var z=Math.floor(Math.random()*6);
if(y>z){
  document.querySelector("h1").textContent="Player 1 Wins!."
}else{
  document.querySelector("h1").textContent="Player 2 Wins!."
}
document.getElementById("img1").src=x[y];
document.getElementById("img2").src=x[z];
