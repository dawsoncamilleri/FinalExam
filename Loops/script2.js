var myShopping = ["Eggs", "Milk", "Potatoes", "Cereal", "Banana"];
var truess = false;
do{
var ord = prompt("Enter 1 for alphabetical order, " +
                 "and -1 for reverse order", 1);

if (ord == 1) {
    myShopping.sort();
    document.write(myShopping.join("<br />"));
        truess = true;

} else if (ord == -1) {
    myShopping.sort();
    myShopping.reverse();
    document.write(myShopping.join("<br />"));
        truess = true;

} else {
    document.write("That is not a valid input");
}
}while(truess == false);

function searchWrd()
{
    var wrd = document.getElementById('srchWrd').value;    
    var found = false;
    var pElem = document.getElementById('result');     
    
    for(var i = 0; i < myShopping.length; i++)
    {
        if(wrd.toLowerCase() == myShopping[i].toLocaleLowerCase())
        {
            found = true;
            pElem.innerHTML  = '<i>' + wrd + '</i> was found at index ' + i;
        }
    }

    if(!found)
    {
        pElem.innerHTML = 'The word you are searching for was not found in the list!';
    }
}

function getLongString()
{
    var words = document.getElementById('splitWrd').value;
    
    splitAndReverseText(words);
}

function splitAndReverseText(csv) {
    var parts = csv.split(",");
  //  var p = parts.valueOf();
  //  alert(p + ' ff');
    parts.reverse();
    
    var newHTML = '<br>These are the words which you have enetered in reverse order:<br>'; 

    var reversedString = parts.join(",");

    alert(reversedString);
    
    for(var i = 0; i < parts.length; i++)
    {
        parts[i] = parts[i].trim();
        newHTML += "<input type='text' value ='" + parts[i] + "'><br>";
    }
        
    document.getElementById('lngStrRes').innerHTML = newHTML;  
    
    reversedString = parts.join(",");

    alert(reversedString);
}