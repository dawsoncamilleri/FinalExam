var ids = ["a", "b", "c"];
var locationsss = ["malta", "moldova", "argentina"];

//document.getElementById("id").addEventListener("mouseout", checkNumb);
//var name = document.getElementById("firstname");
//var surname = document.getElementById('lastname');
//var id = document.getElementById('id');

//alert(name);
//name.addEventListener("click", hi);
window.onload = function()
{
var names = document.getElementById("firstname");
var lastnames = document.getElementById("lastname");
var idss =  document.getElementById("id");
var pwd =  document.getElementById("password");
var locationss =  document.getElementById("location");


names.onmouseout = hi;
lastnames.onmouseout = placeholder;
lastnames.onmouseout = length;

//idss.addEventListener("mouseout", ifempty);
idss.onmouseout = ifempty;
names.onmouseout = ifempty;
lastnames.onmouseout = ifempty;
//idss.onmouseout = checkNumb;
//////document.getElementById("id").removeEventListener("mouseout", checkNumb);     // Fails
idss.onmouseout = checkNumb;
  //  idss.onmouseout = checkNumb;

pwd.onmouseout = checkpwd;
pwd.onmouseover = checkpwd2;
locationss.onmouseout = locationn;
//    
//pwd.onmouseout = specialDig;


}
//surname.addEventListener("click", hi);
//id.addEventListener("click", hi);

//resets
function hi(){
    pelemMsg = this.value;
        alert(pelemMsg);

   // pelemMsg.placeholder='';
            this.value = '';

}



function checkNumb(){
    var elements = this.value;
    alert(elements);
   // elements = elements.substring(1);
//    var car2 = car1;
//    for(let key in car2){
//        alert(car1[key]);
//    }
    
   // alert(elements2);
//    if(elements == '' || elements == null){
//        alert("write something");
//    }
//    
//     else if(elements != '' || elements != null){
//        alert("write something2");
//    }
        elements2 = parseInt(this.value);

    if(isNaN(elements2)){
        alert("this is not");
    }
    else{
        alert("yes");
        
    
}
    
// checking if letters
//    if(elements.match(/[a-z]/i)){
//        alert("letters yes");
//    }
//    else{
//        alert("not letter");
//    }
    
//elements = this.value;

var lastLetter = elements.slice(-1);
//var firstletter = elements.chatAt(0);
    alert(lastLetter);
    if(lastLetter == ids[0] || lastLetter == ids[1] || lastLetter == ids[2]){
        alert("correct last letter ");
    }
else{
    alert("incorrect last letter");
}
}
    


function placeholder(){
  //  var a = this.id;
    alert(a);
  //  document.getElementById("lastname").placeholder = "Type name here..";
  //  var el = document.getElementById("lastname");

 //   el.style.color = 'red';
 //   el.value = 'Type name here..';
}

function length(){
    
    var len = this.value;
    var num = len.length;
    if(this.value == 'lastname'){
    if(num < 5){
        alert("this is too small");
    }
    }
    alert(num);
}


function ifempty(){
     var pelemMsg2 = this.value;
    var errors = document.getElementById("error");
    errors.style.color = "red";

    if(pelemMsg2 == ''){
    alert("cannot be left empty");
        errors.innerHTML = "Error " + this.id + ' is empty';
    }
    else{
        errors.innerHTML = " ";
    }
}


function checkpwd(){
     var password = this.value;
    alert(password);
    var confirmPass = document.getElementById('passwordChck').value;
    
    var pelemMsg = document.getElementById('passChckWordErrMsg');
        var pelemMsg2 = document.getElementById('passChckWordErrMsg2');

    pelemMsg.style.color = 'red';
    pelemMsg.style.fontWeight = 'bold';
    
     pelemMsg2.style.color = 'red';
    pelemMsg2.style.fontWeight = 'bold';
    
    if(password != confirmPass)
    {        
        pelemMsg.style.display = 'block';
        pelemMsg.innerHTML = 'Your password does not match!';
    }
    else{
                pelemMsg.style.display = 'none';

    }
    
     if(!checkCharDig(password))
    {
        pelemMsg2.style.display = 'block';
        pelemMsg2.innerHTML = 'Your password needs to be made up of at least one special character or digit!';
    }
    
    else{
         pelemMsg2.style.display = 'none';
        pelemMsg2.innerHTML = '';
    }
}


function checkpwd2(){
   
    var pelemMsg;

   // var pelemMsg2;
    
    //alert('kk');
        pelemMsg = document.getElementById('passWordErrMsg');
        pelemMsg.style.display = 'none';
        pelemMsg.innerHTML = '';
    
    
 //       pelemMsg2 = document.getElementById('passChckWordErrMsg');
   //     pelemMsg2.style.display = 'none';
     //   pelemMsg2.innerHTML = '';
    

    
//    
//    var pelemMsg;
//    
//    if(this.id == 'username')
//    {
//        pelemMsg = document.getElementById('usernameErrMsg');
//        pelemMsg.style.display = 'none';
//        pelemMsg.innerHTML = '';
//    }
//    else if(this.id == 'password')
//    {
//        pelemMsg = document.getElementById('passWordErrMsg');
//        pelemMsg.style.display = 'none';
//        pelemMsg.innerHTML = '';
//    }
//    else if(this.id == 'passwordChck')
//    {
//        pelemMsg = document.getElementById('passChckWordErrMsg');
//        pelemMsg.style.display = 'none';
//        pelemMsg.innerHTML = '';
//    }
    
    
}


function checkCharDig(passwrd)
{
    var pattern = /[0-9!"£$%?^&*()_+-=]/;
    
    return pattern.test(passwrd);
}

//
//function specialDig()
//{
//   var currPassword = this.value;
//    var pelemMsg = document.getElementById('passWordErrMsg');
//    
//    pelemMsg.style.color = 'red';
//    pelemMsg.style.fontWeight = 'bold';
//    
//    
//     if(!checkCharDig(currPassword))
//    {
//        pelemMsg.style.display = 'block';
//        pelemMsg.innerHTML = 'Your password needs to be made up of at least one special character or digit!';
//    }
//    
//    else{
//         pelemMsg.style.display = 'none';
//        pelemMsg.innerHTML = '';
//    }
//    
//  /*    var currPassword = this.value;
//    var pelemMsg = document.getElementById('passWordErrMsg');
//    
//    pelemMsg.style.color = 'red';
//    pelemMsg.style.fontWeight = 'bold';
//    
//    if(currPassword == '')
//    {
//        pelemMsg.style.display = 'block';
//        pelemMsg.innerHTML = 'Please fill in your password!';
//    }
//    else if (currPassword.length < 6)
//    {
//        pelemMsg.style.display = 'block';
//        pelemMsg.innerHTML = 'Your password needs to be made up of at least 6 characters!';
//    }
//    else if(!checkCharDig(currPassword))
//    {
//        pelemMsg.style.display = 'block';
//        pelemMsg.innerHTML = 'Your password needs to be made up of at least one special character or digit!';
//    }*/
//    
//    
//    
//    
//    
//}



function locationn()
{
   var currlocation = this.value;
            alert(currlocation);
    var con = false;
    //locationsss.includes(currlocation);
    for(var i = 0; i <= locationsss.length; i++){
     if(currlocation == locationsss[i])
    {
        
        alert("already exists" +  locationsss[i] + currlocation);
        con = true;
        break;
        
    }
   
    
    
    }
    
     if(con == false){
    locationsss.push(currlocation);
   }
    
}


