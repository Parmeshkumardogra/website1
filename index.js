function randomNumber(){
    var random_number=Math.floor((Math.random()*6)+1);
    return random_number;
}

var image_Generator1= "dice"+randomNumber()+".png";
var image_Generator2= "dice"+randomNumber()+".png";
var get1=document.querySelectorAll("img")[0].setAttribute("src",image_Generator1);
var get2=document.querySelectorAll("img")[1].setAttribute("src",image_Generator2);

if(image_Generator1>image_Generator2){
    document.querySelector(".first-h1").innerHTML="Player 1 Won😀";
}
else if(image_Generator1==image_Generator2){
    document.querySelector(".first-h1").innerHTML="Draw😞";
    
}
else{
    document.querySelector(".first-h1").innerHTML="Player 2 Won😀"
}