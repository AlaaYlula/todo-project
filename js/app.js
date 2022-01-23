console.log("Hi I am inside the JS");


var userName = prompt("Enter your Name");

var flagGender = true;
var flagAge = true;
while (flagGender == true) {
    var userGender = prompt("Enter your Gender(Male or Female or nothing)");
    var userGenderUp = userGender.toUpperCase();

    if (userGenderUp == "MALE" || userGenderUp == "FEMALE" || userGenderUp == "") {
        while (flagAge == true) {
            var userAge = prompt("Enter your Age");
            if (userAge <= 0) {
                alert("The age is less than or equal to zero,Must be more than Zero");
                flagAge = true;
            } else {
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
        alert("The Gender Must be Female or Male  or nothing");
        flagGender = true;
    }
}

function Check(q,i) {
    question1Lower = q.toLowerCase();
    if (question1Lower == "yes" || question1Lower == "y" || question1Lower == "no" || question1Lower == "n") {
        infoArray[i] = question1Lower;
        q1Flag = false;
    }
    else if (question1Lower == "") {
            q1Flag = true;
        }
    else {
        q1Flag = true;
    }

}
let infoArray = [];
let q1Flag = true;
let question1;
let question1Lower;
do {
    question1 = prompt("Are you Married ? ");
    Check(question1,0);
} while (q1Flag);


do {
    question1 = prompt("Are you Student ? ");
    Check(question1,1);
} while (q1Flag);


do {
    question1 = prompt("Are you Happy ? ");
    Check(question1,2);
} while (q1Flag);

for(let x=0 ; x<=2 ;x++)
{
console.log(infoArray[x]);
}