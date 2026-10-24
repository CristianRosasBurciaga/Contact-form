
document.getElementById("contact-form").onsubmit = () => {
    let valid = true;
    //clear all errors
    clearErrors();

    //form validation for first name
    //if first name is empty, dont submit the form
    let fname = document.getElementById("fname").value;
    if(fname === "") {
        document.getElementById("error-fname").style.display = "block";
        valid = false;
    }

    //form validation for last name
    //if last name is empty, dont submit the form
    let lname = document.getElementById("lname").value;
    if(lname === "") {
        document.getElementById("error-lname").style.display = "block";
        valid = false;
    }

    //form validation for LinkedIn url
    //LinkedIn URL is optional
    //But if it is filled, it must start with https://linkedin.com/in/ 
    let linkedInURL = document.getElementById("linkedin").value;
    if(linkedInURL !== "") {
    let regexLinkedIn = /^https:\/\/linkedin\.com\/in\/+/;

    if(regexTest(regexLinkedIn, linkedInURL) === false) {
        document.getElementById("error-linkedin").style.display = "block";
        valid = false;
        console.log(valid);
    }
    }

     //form validation for how we met
    let howMeet = document.getElementById("how-meet").value;
    if(howMeet === "none") {
        document.getElementById("error-how-meet").style.display = "block";
        valid = false;
    }

    //form validation for mailing list checkbox
    //if mail-list is checked, make email required
    let mailList = document.getElementById("mail-list").checked;
    let email = document.getElementById("email").value;
    console.log(mailList);
    console.log(email);
    if(mailList === true && email === "") {
            document.getElementById("error-email").style.display = "block";
            valid = false;
     } 
     //if email is not empty, test the input for validation
     else if (email !== "") {
        let regexEmail = /^.+@.+\.[a-zA-Z]{2,}$/;

        if(regexTest(regexEmail, email) === false) {
            document.getElementById("error-email").style.display = "block";
            valid = false;
        }
    }

     return valid;
};

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for(let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}

function regexTest(regex, input) {
    return regex.test(input);
    
}