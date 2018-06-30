var myArray = ['Chasing Cars', 'Human', 'Mr. Brightside', 'Super Massive Black Hole', 'Twisted Transistor', 'Yellow', 'Seven Nation Army'];
var typeOfIndex = true;
var artistsArr = new Array();

function initialProcess()
{
   document.getElementById('arrayLength').innerHTML += myArray.length;  
}

function displayElem()
{
    var index = parseInt(document.getElementById('index').value);
    //if became 1
    if(!typeOfIndex)
    {
       index--;
    }
    
    var item = myArray[index];
    var outputString;
    
    document.getElementById('arrayItem').style.color = "black";
    document.getElementById('arrayItem').style.fontSize = "16px";
    
    if(item == undefined)
    {
        document.getElementById('arrayItem').style.color = "red";
        document.getElementById('arrayItem').style.fontSize = "18px";
        outputString = 'The item you are looking for is not in the list, kindly enter a number between 0 and 6';
    }
  
    else 
    {
        outputString = "Song: " + item;
    }
    
    
      if(item == undefined && !typeOfIndex)
    {
        document.getElementById('arrayItem').style.color = "red";
        document.getElementById('arrayItem').style.fontSize = "18px";
        outputString = 'The item you are looking for is not in the list, kindly enter a number between 1 and 7';
    }
    
    else 
    {
        outputString = "Song: " + item;
    }
    
    
    
    
    
    document.getElementById('arrayItem').innerHTML = outputString;
}

function changeIndex()
{
    typeOfIndex = !typeOfIndex;
}

function musicArtists()
{
    artistsArr[0] = document.getElementById('artist1').value;
    artistsArr[1] = document.getElementById('artist2').value;
    artistsArr[2] = document.getElementById('artist3').value;
    
    var allArtists = artistsArr.join(' and ');
    
    document.getElementById('enteredArtists').innerHTML = 'You entered the following artists in this order:<br>' + allArtists;
    
    artistsArr.sort();
    allArtists = artistsArr.join(' and ');
    
    document.getElementById('enteredArtists').innerHTML += '<br><br>And this is your sorted list:<br>' + allArtists;
    
}