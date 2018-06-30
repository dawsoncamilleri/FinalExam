var word = "Many of life's failures are people who did not realize how close they were to success when they gave up.";

    document.getElementById("h3Wrd").innerHTML = word;
  //  LoadDateTime();



 
    var dateNow = new Date();
    var yearNow = dateNow.getFullYear();
    var monthNow = dateNow.getMonth();
    var dayNow = dateNow.getDate();
    var timeNow = dateNow.getTime();
    
    var wholeDateDetails = "Day: " + dayNow + " Month: " + (monthNow+1) + " Year: " + yearNow + "<br>Time: (number of milliseconds since 1970/01/01) " + timeNow;
     switch(monthNow){
        case 1: monthNow2 = "January";
            break;
             case 2: monthNow2 = "Febury";
            break;
             case 3: monthNow2 = "March";
            break;
             case 4: monthNow2 = "April";
            break;
             case 5: monthNow2 = "May";
            break;
             case 6: monthNow2 = "June";
            break;
             case 7: monthNow2 = "July";
            break;
             case 8: monthNow2 = "August";
            break;
             case 9: monthNow2 = "September";
            break;
             case 10: monthNow2 = "October";
            break;
             case 11: monthNow2 = "November";
            break;
             case 12: monthNow2 = "December";
            break;
                   }
    var wholeDateDetails = "Day: " + dayNow + " Month: " + monthNow2 + " Year: " + yearNow + "<br>Time: (number of milliseconds since 1970/01/01) " + timeNow;
    var dateNowFormat1 = new Date().toLocaleString();
    var dateNowFormat2 = new Date().toLocaleDateString();
    var timeNowFormat1 = new Date().toLocaleTimeString();
    var timeNowFormat2 = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"});
    
    wholeDateDetails += "<br><br>Date Format 1: " + dateNowFormat1;
    
    wholeDateDetails += "<br><br>Date Format 2: " + dateNowFormat2;
    
    wholeDateDetails += "<br><br>Time Format 1: " + timeNowFormat1;
    
    wholeDateDetails += "<br><br>Time Format 2: " + timeNowFormat2;
    
    document.getElementById("dateDetails").innerHTML = wholeDateDetails;

function subStringPos(substring)
{
    var pos = word.indexOf(substring);
    
    return pos;
}

function posEvent()
{
    var sub = document.getElementById("subTxt").value;
    var pos = subStringPos(sub);
    
    document.getElementById("posSpan").innerHTML = "Substring position: " + pos;
}