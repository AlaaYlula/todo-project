console.log("Hi I am inside the JS");

var userName = prompt("Enter your Name");

var userGender = prompt("Enter your Gender(Male or Female)");
var userGenderUp=userGender.toUpperCase();

var userAge = prompt("Enter your Age");
if(userAge <= 0)
{
    alert("the age is less than or equal to zero");
};

var welc_msg = confirm("Do you Want Welcoming message");
   
if (welc_msg)
{
    switch(userGenderUp)
    {
        case "MALE":
            alert("Welcome Mr "+userName);
            break;
        case "FEMALE":
            alert("Welcome Ms "+userName);
            break;
        default:
            alert("Welcome "+userName);
            break;
    }
 
}
