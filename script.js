function register(e) {
    e.preventDefault();
    let name = document.getElementById('name').value; //access name input using ID//
    let email = document.getElementById('email').value; //access email input using ID//
    let password = document.getElementById('password').value; //access password input using ID//
    let password2 = document.getElementById('password2').value; //access password2 input using ID//
    let msg = document.getElementById('msg');
    if (name == "" || email == "" || password == "" || password2 == "") {
        msg.className = "alert alert-danger";
        msg.innerHTML = "Please fill out every field";
    } else {
        // make sure user doesnt enter too short of a name
        if (name.length < 2) {
            msg.className = "alert alert-danger";
            msg.innerHTML = "Name must be at least 2 characters";
        } else {
            //make sure user enters proper email
            let atpos = email.indexOf("@");
            let dotpos = email.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
                msg.className = "alert alert-danger";
                msg.innerHTML = "Please use a valid email";
            } else {
                //check if passwords are equal//
                if (password != password2) {
                    msg.className = "alert alert-danger"
                    msg.innerHTML = "Passwords do not match"
                } else {
                    if (password.length < 6) {
                        msg.className = "alert alert-danger";
                        msg.innerHTML = "Please make your password at least 6 characters";
                    } else {
                        //success//
                        msg.className = "alert alert-success";
                        msg.innerHTML = name + " is registered with email " + email;
                    }
                }
            }
        }
    }
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('logIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

