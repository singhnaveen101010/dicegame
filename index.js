
var randomNumber1=3+Math.floor(Math.random()*6);
var randomNumber2=1+Math.floor(Math.random()*6);
var imgadd1;
if(randomNumber1>6)
  imgadd1="./images/dice6.png"; 
 else
   imgadd1="./images/dice"+randomNumber1+".png";
var imgadd2="./images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",imgadd1);
document.querySelector(".img2").setAttribute("src",imgadd2);
if(randomNumber1>randomNumber2)
 {  
     document.querySelector("h1").innerText="🚩naveen won! , priya lose😒";
 }
else if(randomNumber1<randomNumber2)
{ 
    document.querySelector("h1").innerText="priya won!🚩, naveen lose😒";
}
else 
  {
    document.querySelector("h1").innerText="draw!";
  }