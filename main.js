// Page 1
document.getElementById("login-btn").addEventListener("click", function () {
    const emailField = document.getElementById("mail");
    const userMail = emailField.value;

    const passlField = document.getElementById("pass");
    const userpass = passlField.value;
    if (userMail == "account@gmail.com" && userpass == "account") {
        window.location.href = "pages/body.html";
    }
    else { console.log(alert("Enter valid email and password")) }

})


