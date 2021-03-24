function checkForm(){ 
    var error=false; //to znaczy, że danych nie brakuje
    var errorText=""; //komunikat z błędem 
    var contactName = document.getElementById("name");
    var contactEmail = document.getElementById("surname"); 

    if (contactName.value == ""){
    errorText = "errorName";
    error=true; 
    } 

    if (contactName.value == ""){
    errorText += "nazwisko\n"
    error=true; 
    } 

    if(contactEmail.value == ""){
        errorText += "email\n";
        error=true; 
       } else 
       { 
        var email = contactEmail.value; 
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/; 
        if(regex.test(email)==false) 
        { 
        errorText += "błędny email\n";
        error=true; 
        } 
       } 

    if (!error) return true; else{
        document.getElementById("errorText").className="alert alertdanger";
        return false; 
    } } 