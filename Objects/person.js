var btnSubmit = document.getElementById('submit');
var nameTxt = document.getElementById('name');
var emailTxt = document.getElementById('email');
var ageTxt = document.getElementById('age');
var idTxt = document.getElementById('id');
var allPersonsElem = document.getElementById('allPersons');
var persons = [];

function Person(fullName, email, age, id)
{
    this.fullName = fullName;
    this.email = email;
    this.age = age;
    this.id = id;
}

function addPerson()
{
    var name = nameTxt.value;
    var email = emailTxt.value;
    var age = ageTxt.value;
    var id = idTxt.value;
    
    nameTxt.value = '';
    emailTxt.value = '';
    ageTxt.value = '';
    idTxt.value = '';
    
    if((name == '') || (email == '') || (age == '') || (id == '') )
    {   
        alert('All fields need to inserted!');
        return;
    }
    
    var exists = false;
    
    for(i = 0; i < persons.length; i++)
    {
        if(id == persons[i].id)
        {
            exists = true;
        }
    }
    
    if(exists)
    {
        alert('A person with your ID has already registered with us.');
    }
    else
    {
        var newPerson = new Person(name, email, age, id);
        persons.push(newPerson);
        allPersonsElem.innerHTML += '<br>Person: ' + persons.length + '<br>Full Name: ' + newPerson.fullName + '<br>Email: ' + newPerson.email + '<br>Age: ' + newPerson.age + '<br>ID: ' + newPerson.id + '<br>';
        
    }
    

}

btnSubmit.addEventListener('click', addPerson);