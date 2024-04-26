document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("loginForm");
    var voterIdInput = document.getElementById("voterId");
    var aadharInput = document.getElementById("aadharCardNumber");
    var passwordInput = document.getElementById("password");
    var errorMessage = document.getElementById("errorMessage");
    var button = document.querySelector("button");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var voterId = voterIdInput.value.trim();
        var aadhar = aadharInput.value.trim();
        var password = passwordInput.value.trim();

        if (!voterId || !aadhar || !password) {
            errorMessage.textContent = "Error: Some fields are empty.";
            return;
        }

        console.log("Voter ID:", voterId);
        console.log("Aadhar Card Number:", aadhar);
        console.log("Password:", password);

        form.reset();
        errorMessage.textContent = "";
    });

    button.addEventListener("click", function () {
        button.textContent = "Loading...";
        button.style.backgroundColor = "green";
    });
});
