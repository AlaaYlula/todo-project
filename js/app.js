console.log("Hi I am inside the JS");

var userName = prompt("Enter your Name");

var flag= true;
while(flag==true)
{
var userGender = prompt("Enter your Gender(Male or Female)");
var userGenderUp=userGender.toUpperCase();

if(userGenderUp=="MALE" || userGenderUp=="FEMALE")
{
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
            flag=false;
            break;
        case "FEMALE":
            alert("Welcome Ms "+userName);
            flag=false;
            break;
        default:
            alert("Welcome "+userName);
            flag=false;
            break;
    }
 
}
}else{
    alert("The Gender Must be Female or Male");
    flag=true;
}
}