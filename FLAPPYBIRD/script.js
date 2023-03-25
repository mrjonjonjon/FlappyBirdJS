var block = document.getElementById('block');

var hole = document.getElementById('hole');
var game = document.getElementById('game');
var character = document.getElementById('character');
var jumping = 0;

function checkCollision(){

    var gameLeft = game.offsetLeft;
    var gameWidth = parseInt(window.getComputedStyle(game).getPropertyValue('width'));
    console.log(gameWidth);

    var blockLeft =parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    var blockTop =parseInt(window.getComputedStyle(block).getPropertyValue('top'));
    var blockWidth =parseInt(window.getComputedStyle(block).getPropertyValue('width'));
    var blockHeight =parseInt(window.getComputedStyle(block).getPropertyValue('height'));

    var charLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    charLeft = gameWidth/2;
    var charTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var charWidth = parseInt(window.getComputedStyle(character).getPropertyValue('width'));
    var charHeight = parseInt(window.getComputedStyle(character).getPropertyValue('height'));
    //convert chartop from absolute to relative
    charTop = -(500-charTop)
    var holeLeft = parseInt(window.getComputedStyle(hole).getPropertyValue('left'));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
   
    var holeWidth = parseInt(window.getComputedStyle(hole).getPropertyValue('width'));
    var holeHeight = parseInt(window.getComputedStyle(hole).getPropertyValue('height'));


    var belowBottom = charTop>-20;
    var touchingHole = !(charLeft+charWidth<holeLeft || charLeft>holeLeft + holeWidth) && !(charTop+charHeight<holeTop || charTop>holeTop+holeHeight)
    var touchingWall = !(charLeft+charWidth<blockLeft || charLeft>blockLeft+blockWidth)
    
    if (belowBottom || (touchingWall && !touchingHole)){
        //alert("Game Over. YOU LOST. LOSER!")
        character.style.top = 0 + 'px';
        counter=0;
    }
}
hole.addEventListener('animationiteration',()=>{

    var random =-(Math.random()*300 + 150);
    hole.style.top = random +'px';
})


//gravity
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

    if(jumping==0){


    character.style.top = (characterTop)+3+'px';

   
    }
     checkCollision();
},10)

function jump(){
    jumping=1;
    let jumpCount =0;  
    
    var jumpInterval = setInterval(function(){

        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

    character.style.top = (characterTop)-(5-5*((jumpCount)/20))+'px';
        if(jumpCount>20){
           clearInterval(jumpInterval); 
           jumping=0;
           jumpCount=0;
        }
        jumpCount++;
    },10)


}