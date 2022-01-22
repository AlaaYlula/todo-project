console.log("Hi I am inside the JS");

var userName = prompt("Enter your Name");

var flagGender = true;
var flagAge = true;
while (flagGender == true) {
    var userGender = prompt("Enter your Gender(Male or Female)");
    var userGenderUp = userGender.toUpperCase();

    if (userGenderUp == "MALE" || userGenderUp == "FEMALE") {
        while (flagAge == true) {
            var userAge = prompt("Enter your Age");
            if (userAge <= 0) {
                alert("The age is less than or equal to zero,Must be more than Zero");
                flagAge=true;
            }else{
                flagAge = false;
            }
        }
        var welc_msg = confirm("Do you Want Welcoming message");

        if (welc_msg) {
            switch (userGenderUp) {
                case "MALE":
                    alert("Welcome Mr " + userName);
                    flagGender = false;
                    break;
                case "FEMALE":
                    alert("Welcome Ms " + userName);
                    flagGender = false;
                    break;
                default:
                    alert("Welcome " + userName);
                    flagGender = false;
                    break;
            }

        }
    } else {
        alert("The Gender Must be Female or Male");
        flagGender = true;
    }
}