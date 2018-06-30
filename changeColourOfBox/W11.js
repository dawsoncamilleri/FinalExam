function changetext(){
    var textchange2 = "This is the new me :p " ;
  //  var id = document.getElementById("box1");
    id.innerHTML=textchange2;
}
function normalImg(){
    var textchange2 = "hi " ;
    var id = document.getElementById("box1");
    id.innerHTML=textchange2;
}

function myFunction(){
    document.getElementById("box1").style.backgroundColor = "red";
}

var id = document.getElementById("box1");
id.addEventListener("mouseover", changetext);