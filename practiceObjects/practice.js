function Cars(name,age,image){
    this.name = name;
    this.age = age;
    this.image = image;
}

var car1 = new Cars("name:john", "age:12");
var car2 = new Cars("name:eric", "age:22");
var car3 = new Cars("name:wayne", "age:32");

var item = document.getElementById("texts");
var i = 0;


var buttonLeft = document.getElementById("left");
var buttonRight = document.getElementById("right");


buttonLeft.addEventListener("click", hello);
buttonRight.addEventListener("click", hello1);


function hello1(){
    i++;
    alert(i);
    if(i == 1){
     for(let key in car1) {
        item.innerHTML +=  " " + car1[key] + "<br>";
    

}
    }

        if(i == 2){

for(let key in car2) {
   item.innerHTML +=  " " + car2[key] + "<br>";

}
        }

    if(i == 3){
for(let key in car3) {
   item.innerHTML +=  " " + car3[key] + "<br>";

}
}
     if(i>4){
        i = 0;
    }
}


function hello(){
    i--;
    alert(i);
    if(i == 1){
     for(let key in car1) {
        item.innerHTML +=  " " + car1[key] + "<br>";
    

}
    }

        if(i == 2){

for(let key in car2) {
   item.innerHTML +=  " " + car2[key] + "<br>";

}
        }

    if(i == 3){
for(let key in car3) {
   item.innerHTML +=  " " + car3[key] + "<br>";

}
}
    if(i<1){
        i = 3;
    }
}