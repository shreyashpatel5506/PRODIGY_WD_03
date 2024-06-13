 let turn=1;
 function turn1(){
    if(turn==1){
        document.getElementById("b1").value="X";
        document.getElementById("b1").disabled= true;
        turn=0;
    }
    else{
        document.getElementById("b1").value="O";
        document.getElementById("b1").disabled= true;
        turn=1;
    }
 }
 function turn2(){
    if(turn==1){
        document.getElementById("b2").value="X";
        document.getElementById("b2").disabled= true;
        turn=0;
    }
    else{
        document.getElementById("b2").value="O";
        document.getElementById("b2").disabled= true;
        turn=1;
    }
 }
 function turn3(){
    if(turn==1){
        document.getElementById("b3").value="X";
        document.getElementById("b3").disabled= true;
        turn=0;
    }
    else{
        document.getElementById("b3").value="O";
        document.getElementById("b3").disabled= true;
        turn=1;
    }
 }
 function turn4(){
    if(turn==1){
        document.getElementById("b4").value="X";
        document.getElementById("b4").disabled= true;
        turn=0;
    }
    else{
        document.getElementById("b4").value="O";
        document.getElementById("b4").disabled= true;
        turn=1;
    }
 }
 function turn5(){
    if(turn==1){
        document.getElementById("b5").value="X";
        document.getElementById("b5").disabled= true;
        turn=0;
    }
    else{
        document.getElementById("b5").value="O";
        document.getElementById("b5").disabled= true;
        turn=1;
    }
 }
 function turn6(){
    if(turn==1){
        document.getElementById("b6").value="X";
        document.getElementById("b6").disabled= true;
        turn=0;
    }
    else{
        document.getElementById("b6").value="O";
        document.getElementById("b6").disabled= true;
        turn=1;
    }
 }function turn7(){
    if(turn==1){
        document.getElementById("b7").value="X";
        document.getElementById("b7").disabled= true;
        turn=0;
    }
    else{
        document.getElementById("b7").value="O";
        document.getElementById("b7").disabled= true;
        turn=1;
    }
 }
 function turn8(){
    if(turn==1){
        document.getElementById("b8").value="X";
        document.getElementById("b8").disabled= true;
        turn=0;
    }
    else{
        document.getElementById("b8").value="O";
        document.getElementById("b8").disabled= true;
        turn=1;
    }
 }
 function turn9(){
    if(turn==1){
        document.getElementById("b9").value="X";
        document.getElementById("b9").disabled= true;
        turn=0;
    }
    else{
        document.getElementById("b9").value="O";
        document.getElementById("b9").disabled= true;
        turn=1;
    }
 }
 function reset(){
    location.reload()
    document.getElementById("b1").value
    document.getElementById("b3").value
    document.getElementById("b4").value
    document.getElementById("b5").value
    document.getElementById("b6").value
    document.getElementById("b7").value
    document.getElementById("b2").value
    document.getElementById("b8").value
    document.getElementById("b9").value

 }
 
 function check(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1= document.getElementById("b1").value;
    b2= document.getElementById("b2").value;
    b3= document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;

  var b1dis,b2dis,b3dis,b4dis,b5dis,b6dis,b7dis,b8dis,b9dis; 
b1dis = document.getElementById("b1")
b2dis = document.getElementById("b2")
b3dis = document.getElementById("b3")
b4dis = document.getElementById("b4")
b5dis = document.getElementById("b5")
b6dis =document.getElementById("b6")
b7dis =document.getElementById("b7")
b8dis =document.getElementById("b8")
b9dis =document.getElementById("b9")

var 
player2 =document.getElementById("player2").value
var 
player1 =document.getElementById("player1").value


    if((b1=="x"||b1=="X")&&(b2=='x'||b2=="X")&&(b3=="x"||b3=="X")){
        b4dis.disabled=true;
        b5dis.disabled=true;
        b6dis.disabled=true;
        b7dis.disabled=true;
        b8dis.disabled=true;
        b9dis.disabled=true;
        document.getElementById("winner").innerHTML = player1+ "   "+ "win";
        b1dis.style.backgroundColor = "red";
        b2dis.style.backgroundColor = "red";
        b3dis.style.backgroundColor = "red";
    }
    
    else if((b4=="x"||b4=="X")&&(b5=='x'||b5=="X")&&(b6=="x"||b6=="X")){
        b1dis.disabled=true;
        b2dis.disabled=true;
        b3dis.disabled=true;
        b7dis.disabled=true;
        b8dis.disabled=true;
        b9dis.disabled=true;
        document.getElementById("winner").innerHTML = player1+ "   "+ "win";
        b4dis.style.backgroundColor = "red";
        b5dis.style.backgroundColor = "red";
        b6dis.style.backgroundColor = "red";
    }
    else if((b7=="x"||b7=="X")&&(b8=='x'||b8=="X")&&(b9=="x"||b9=="X")){
        b1dis.disabled=true;
        b2dis.disabled=true;
        b3dis.disabled=true;
        b4dis.disabled=true;
        b5dis.disabled=true;
        b6dis.disabled=true;
        document.getElementById("winner").innerHTML = player1+ "   "+ "win";
        b7dis.style.backgroundColor = "red";
        b8dis.style.backgroundColor = "red";
        b9dis.style.backgroundColor = "red";
    }
    else if((b1=="x"||b1=="X")&&(b4=='x'||b4=="X")&&(b7=="x"||b7=="X")){
        b8dis.disabled=true;
        b2dis.disabled=true;
        b3dis.disabled=true;
        b9dis.disabled=true;
        b5dis.disabled=true;
        b6dis.disabled=true;
        document.getElementById("winner").innerHTML = player1+ "   "+ "win";
        b1dis.style.backgroundColor = "red";
        b4dis.style.backgroundColor = "red";
        b7dis.style.backgroundColor = "red";
    }
    else if((b2=="x"||b2=="X")&&(b5=='x'||b5=="X")&&(b8=="x"||b8=="X")){
        b7dis.disabled=true;
        b1dis.disabled=true;
        b3dis.disabled=true;
        b9dis.disabled=true;
        b4dis.disabled=true;
        b6dis.disabled=true;
        document.getElementById("winner").innerHTML = player1+ "   "+ "win";
        b2dis.style.backgroundColor = "red";
        b5dis.style.backgroundColor = "red";
        b8dis.style.backgroundColor = "red";
    }
    else if((b3=="x"||b3=="X")&&(b6=='x'||b6=="X")&&(b9=="x"||b9=="X")){
        b7dis.disabled=true;
        b1dis.disabled=true;
        b2dis.disabled=true;
        b8dis.disabled=true;
        b4dis.disabled=true;
        b5dis.disabled=true;
        document.getElementById("winner").innerHTML = player1+ "   "+ "win";
        b3dis.style.backgroundColor = "red";
        b6dis.style.backgroundColor = "red";
        b9dis.style.backgroundColor = "red";
    }
    else if((b3=="x"||b3=="X")&&(b5=='x'||b5=="X")&&(b7=="x"||b7=="X")){
        b9dis.disabled=true;
        b1dis.disabled=true;
        b2dis.disabled=true;
        b8dis.disabled=true;
        b4dis.disabled=true;
        b6dis.disabled=true;
        document.getElementById("winner").innerHTML = player1+ "   "+ "win";
        b3dis.style.backgroundColor = "red";
        b5dis.style.backgroundColor = "red";
        b7dis.style.backgroundColor = "red";
    }
    else if((b1=="x"||b1=="X")&&(b5=='x'||b5=="X")&&(b9=="x"||b9=="X")){
        b7dis.disabled=true;
        b3dis.disabled=true;
        b2dis.disabled=true;
        b8dis.disabled=true;
        b4dis.disabled=true;
        b6dis.disabled=true;
        document.getElementById("winner").innerHTML = player1+ "   "+ "win";
        b1dis.style.backgroundColor = "red";
        b5dis.style.backgroundColor = "red";
        b9dis.style.backgroundColor = "red";
    }

    else if((b1=="o"||b1=="O")&&(b2=='o'||b2=="O")&&(b3=="o"||b3=="O")){
        b4dis.disabled=true;
        b5dis.disabled=true;
        b6dis.disabled=true;
        b7dis.disabled=true;
        b8dis.disabled=true;
        b9dis.disabled=true;
        document.getElementById("winner").innerHTML = player2 +  "     " +  "win";
        b1dis.style.backgroundColor = "red";
        b2dis.style.backgroundColor = "red";
        b3dis.style.backgroundColor = "red";
    }
    
    else if((b4=="0"||b4=="O")&&(b5=='o'||b5=="O")&&(b6=="o"||b6=="O")){
        b1dis.disabled=true;
        b2dis.disabled=true;
        b3dis.disabled=true;
        b7dis.disabled=true;
        b8dis.disabled=true;
        b9dis.disabled=true;
        document.getElementById("winner").innerHTML = player2 +  "     " +  "win";
        b4dis.style.backgroundColor = "red";
        b5dis.style.backgroundColor = "red";
        b6dis.style.backgroundColor = "red";
    }
    else if((b7=="o"||b7=="O")&&(b8=='o'||b8=="O")&&(b9=="o"||b9=="O")){
        b1dis.disabled=true;
        b2dis.disabled=true;
        b3dis.disabled=true;
        b4dis.disabled=true;
        b5dis.disabled=true;
        b6dis.disabled=true;
        document.getElementById("winner").innerHTML = player2 +  "     " +  "win";
        b7dis.style.backgroundColor = "red";
        b8dis.style.backgroundColor = "red";
        b9dis.style.backgroundColor = "red";
    }
    else if((b1=="o"||b1=="O")&&(b4=='O'||b4=="O")&&(b7=="o"||b7=="O")){
        b8dis.disabled=true;
        b2dis.disabled=true;
        b3dis.disabled=true;
        b9dis.disabled=true;
        b5dis.disabled=true;
        b6dis.disabled=true;
        document.getElementById("winner").innerHTML = player2 +  "     " +  "win";
        b1dis.style.backgroundColor = "red";
        b4dis.style.backgroundColor = "red";
        b7dis.style.backgroundColor = "red";
    }
    else if((b2=="O"||b2=="o")&&(b5=='O'||b5=="o")&&(b8=="O"||b8=="o")){
        b7dis.disabled=true;
        b1dis.disabled=true;
        b3dis.disabled=true;
        b9dis.disabled=true;
        b4dis.disabled=true;
        b6dis.disabled=true;
        document.getElementById("winner").innerHTML = player2 +  "     " +  "win";
        b2dis.style.backgroundColor = "red";
        b5dis.style.backgroundColor = "red";
        b8dis.style.backgroundColor = "red";
    }
    else if((b3=="o"||b3=="O")&&(b6=='o'||b6=="O")&&(b9=="o"||b9=="O")){
        b7dis.disabled=true;
        b1dis.disabled=true;
        b2dis.disabled=true;
        b8dis.disabled=true;
        b4dis.disabled=true;
        b5dis.disabled=true;
        document.getElementById("winner").innerHTML = player2 +  "     " +  "win";
        b3dis.style.backgroundColor = "red";
        b6dis.style.backgroundColor = "red";
        b9dis.style.backgroundColor = "red";
    }
    else if((b3=="o"||b3=="O")&&(b5=='o'||b5=="O")&&(b7=="O"||b7=="O")){
        b9dis.disabled=true;
        b1dis.disabled=true;
        b2dis.disabled=true;
        b8dis.disabled=true;
        b4dis.disabled=true;
        b6dis.disabled=true;
        document.getElementById("winner").innerHTML = player2 +  "     " +  "win";
        b3dis.style.backgroundColor = "red";
        b5dis.style.backgroundColor = "red";
        b7dis.style.backgroundColor = "red";
    }
    else if((b1=="O"||b1=="o")&&(b5=='o'||b5=="O")&&(b9=="o"||b9=="O")){
        b7dis.disabled=true;
        b3dis.disabled=true;
        b2dis.disabled=true;
        b8dis.disabled=true;
        b4dis.disabled=true;
        b6dis.disabled=true;
        document.getElementById("winner").innerHTML = player2 +  "     " +  "win";
        b1dis.style.backgroundColor = "red";
        b5dis.style.backgroundColor = "red";
        b9dis.style.backgroundColor = "red";
    }
    else if((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' || 
            b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' || 
            b8 == 'O') && (b9 == 'X' || b9 == 'O')){
         document.getElementById("winner").innerHTML = "Match Tie"
 }
}