document.getElementById("contact-form").onsubmit = () => {
    let valid = true;
    //clear all errors
    clearErrors();

    //form validation for first name
    let fname = document.getElementById("fname").value;
    if(fname === "") {
        document.getElementById("error-fname").style.display = "block";
        valid = false;
    }

    //form validation for last name
    let lname = document.getElementById("lname").value;
    if(lname === "") {
        document.getElementById("error-lname").style.display = "block";
        valid = false;
    }

    //form validation for mailing list checkbox
    //if mail-list is checked, make email required
    let mailList = document.getElementById("mail-list").value;
    let email = document.getElementById("email").value;
    if(mailList === "checked" && email === "") {
        document.getElementById("email").style.border = "1px solid red"
        valid = false;
    } else {
        valid = true;
    }

    //form validation for LinkedIn url
    const regex = /^https:\/\/linkedin\.com\/in\/+/;
    let linkedInURL = document.getElementById("linkedin").value;
    const regexTest = regex.test(linkedInURL);
    if(regex !== "") {
        
    }
        if(regexTest === false) {
            document.getElementById("error-linkedin").style.display = "block";
            valid = false;
        }

    //form validation for how we met
    let howMeet = document.getElementById("how-meet").value;
    if(howMeet === "none") {
        document.getElementById("error-how-meet").style.display = "block";
    }
    return valid;
};



function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for(let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}