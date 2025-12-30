const TAMs = document.querySelectorAll("#Toggle-Auth-Mode");
const LogIn = document.getElementById("login");
const Register = document.getElementById("register");
const CheckLength = document.getElementById("check-lenght");
const CheckPass = document.getElementById("check-pass");
const Password = document.getElementById("password");
const ConfirmPassword = document.getElementById("confirm-password");
const inputs = document.querySelectorAll(".input")




LogIn.style.display = "";
Register.style.display = "none";

let isLogin = false;
TAMs.forEach(TAM => {
    TAM.addEventListener("click", () => {
        if (isLogin) {
            LogIn.style.display = "";
            Register.style.display = "none";
        } else {
            LogIn.style.display = "none";
            Register.style.display = "";
        }
        isLogin = !isLogin;

        inputs.forEach(input => {
            input.value = ""
        })

    });

});

CheckLength.style.display="none";
CheckLength.style.borderColor="red";

CheckPass.style.display="none";

Password.addEventListener("input", () => {
    CheckLength.style.display =
        Password.value.length < 8 ? "block" : "none";
});

ConfirmPassword.addEventListener("input", () => {
    CheckPass.style.display =
        Password.value == ConfirmPassword.value ? "none" : "block";
});
