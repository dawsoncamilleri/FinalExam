var lists = ["Strawberry", "Banana", "Peach", "Orange ", "Pear", "Grape"];
var haha = [];
function doThis(){


    var person = prompt("Enter 1 for alphabetical order, and enter -1 for reverse order", "1");
    var elements = document.getElementById("listsss");
    if(person == 1){
        lists.sort();
        lists.toString();
            for (var i in lists)
            {
                elements.innerHTML += lists[i] + "<br>";
            }
        
    }
    else if (person == -1){
            lists.reverse();
            lists.toString();
             for (var i in lists)
            {
                elements.innerHTML += lists[i] + "<br>";
            }

    }
    else{
         elements.innerHTML = "not a valid input";
    }
}


function search(){

    var item = document.getElementById("item2").value;
    var item2 = document.getElementById("texts");
    var list2;
    for(var i in lists){
     list2 = lists[i].toLowerCase();
    haha.push(list2);
    }
    var list3 = haha.valueOf();
    alert(list3);
    var item3 = item[0].toUpperCase() + item.substr(1).toLowerCase();
    alert(item3);
    for(var x in lists){
        if(lists[x] == item3){
            item2.innerHTML = item3 + " was found at index " + x;
            break;
        }
        else{
            item2.innerHTML = "not found";

        }
    }

}



function split(){
    var valss1 = document.getElementById("vall").value;
    splitAndReverseTxt(valss1);

}


function splitAndReverseTxt(valss1){
     var res = valss1.split(" ");
     res.reverse();
        
      alert(res);

}

function multiples(){
    var ans = document.getElementById("ans1");
     for(var i = 1; i <11; i++){
         ans.innerHTML += "Multiple " + i + " :" + i * 9 + "<br/>";
     }

}

