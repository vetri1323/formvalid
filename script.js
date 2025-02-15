function validate( ){
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("pwd").value;
const address = document.getElementById("address").value;
const phoneno = document.getElementById("phoneno").value;

const nameerror = document.getElementById("name-error");
const emailerror = document.getElementById("email-error");
const passworderror = document.getElementById("password-error");
const addresserror= document.getElementById("address-error");
const phonenoerror = document.getElementById("phoneno-error");

nameerror.textContent="";
emailerror.textContent="";
passworderror.textContent="";
addresserror.textContent="";
phonenoerror.textContent="";

let nameregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,20}$/;
let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,20}$/;
let phonenoregex = /^\d{10}$/;

if (name =="" || (!nameregex.test(name)))
{
    nameerror.textContent = "Please enter the username is between 6 to 20 characters long and can contain letters, numbers, and underscores";
    return false;
}

if (email =="" || (!emailregex.test(email)))
{
    emailerror.textContent = "Please enter a valid email address!";
    return false;
}

if (password=="" || (!passwordregex.test(password)))
    {
        passworderror.textContent = "Ensures the password is at least 8 characters long and only contains letters and digits.";
        return false;
    }

if (address ==length>20)
        {
            addresserror.textContent = "Please fill address atleast characors 20";
            return false;
    }

    if (phoneno =="" || (!phonenoregex.test(phoneno)))
        {
            phonenoerror.textContent = "Please enter your 10-digit mobile number only.(Don't enter (+91)).";
            return false;
    }
    alert("Your details registered successfully... Welcome to Dashboard")
return true;

}