    function checkName()
    {
        var contactName = document.getElementById("contactName");

        if (contactName.value == "")
        {
            document.getElementById("name").className="form-group has-error";
            document.getElementById("errorName").className="alert alert-danger";
            return true;
        }
        else
        {
            document.getElementById("name").className="form-group has-success";
            document.getElementById("errorName").className="hide";
            document.getElementById("nameIcon").className="glyphicon glyphicon-ok form-control-feedback";
            return false
        }
    }

    function checkSurname()
    {
        var contactSur = document.getElementById("contactSurname");

        if (contactSur.value == "") 
        {
            document.getElementById("surname").className="form-group has-error";
            document.getElementById("errorSurname").className="alert alert-danger"; 
            return true;
        }
        else  
        {
            document.getElementById("surname").className="form-group has-success";
            document.getElementById("errorSurname").className="hide";
            document.getElementById("surnameIcon").className="glyphicon glyphicon-ok form-control-feedback";
            return false
        }
    }
    function checkEmail()
    {
        var contactEmail = document.getElementById("contactEmail");

        if(contactEmail.value == "")  
        {
            document.getElementById("mail").className="form-group has-error";
            document.getElementById("errorEmail").className="alert alert-danger"; 
            return true;
        } 
        else   
        {
            var email = contactEmail.value;
            var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;  
            if(regex.test(email)==false)
            {
                document.getElementById("mail").className="form-group has-error";
                document.getElementById("errorEmail").innerHTML="Zły format!";  
                document.getElementById("errorEmail").className="alert alert-danger"; 
                return true;
            }
            else
            {
             document.getElementById("mail").className="form-group has-success";
             document.getElementById("errorEmail").className="hide";
             document.getElementById("emailIcon").className="glyphicon glyphicon-ok form-control-feedback";
             return false;
            }
        }
    }
    function checkInfo()
    {
        var contactInfo = document.getElementById("contactInfo");

        if (contactInfo.value == "")  
        {
            document.getElementById("info").className="form-group has-error";
            document.getElementById("errorInfo").className="alert alert-danger"; 
            return true;
        }
        else
        {
            document.getElementById("info").className="form-group has-success";
            document.getElementById("errorInfo").className="hide";
            
            return false;
        }

    }

    function checkForm()
    {
        var error=false; 

        if(checkName())
            error=true;
        if(checkSurname())
            error=true;
        if(checkEmail())
            error=true;
        if(checkInfo())
            error=true;
    
        if (!error) return true; 
        else return false;
    }