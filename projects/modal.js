// Get the modal
var modalLogin = document.getElementById("login-form");

// Get the button that opens the modal
var btnLoginOpen = document.getElementById("login-btn");

// Get the button that opens the modal
var btnLoginContinue = document.getElementById("login-submit");

// Get the <span> element that closes the modal
var closeLogin = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnLoginOpen.onclick = function () {
    modalLogin.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeLogin.onclick = function () {
    modalLogin.style.display = "none";
}

// When the user clicks on Login, close the modal
btnLoginContinue.onclick = function () {
    modalLogin.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/* window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
}
} */