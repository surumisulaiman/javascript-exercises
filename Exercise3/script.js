var persons = [];  

/*
   When users clicks on [Add] button call this function  
*/
function addPerson(){
   
   //1. Get the control references
   var txtNameCtrl  = document.getElementById('name'); 
   var txtPhoneCtrl = document.getElementById('phone');  
   var txtEmailCtrl = document.getElementById('email'); 
   
   //2. pass the values to function to construct JSON 
   var person    =  constructPersonObject(txtNameCtrl.value
                     , txtPhoneCtrl.value
                     , txtEmailCtrl.value
                    );

    //3. Add the JSON to array 
    persons.push(person);

    //4. Display the array details 
    displayPersonDetails(persons, 'result');
}

/*
    Following function will create a person JSON and 
    return it back
*/
function constructPersonObject(nameValue, phoneValue, emailValue){
    var person = { name: nameValue, phone: phoneValue, email: emailValue};  
    return person;
}


/*
   Following function takes the JSON object array and displyes 
   it
*/

function displayPersonDetails(persons, containerId){
    var container = document.getElementById(containerId);
    container.innerHTML = "";
    for(var i=0; i<persons.length;  i++){
        var childContainer  = document.createElement("div");
        childContainer.innerText = JSON.stringify(persons[i]);
        container.appendChild(childContainer);
    }


}