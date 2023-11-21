
document.addEventListener("DOMContentLoaded", function(){
    const signUpBtn = document.getElementById("signUpBtn");
    const logInBtn = document.getElementById("logInBtn");
    const failBox = document.getElementById("fail");
    const users = JSON.parse(sessionStorage.getItem("usersData")) || [];
    console.log(users);

    
    function showError(message: string) {
        failBox.style.display = "block";
        failBox.innerHTML = `<p>${message}</p>`
    }

    function signUp(): boolean {
        failBox.style.display = "none";

        const mail = (document.getElementById("mailInput") as HTMLInputElement).value;
        const pass = (document.getElementById("passInput") as HTMLInputElement).value;
        const confirm = (document.getElementById("confirmInput") as HTMLInputElement).value;

        const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i; 
        if (mail.trim() == "" || pass.trim() == "" || confirm.trim() == "") {showError("Fill in all the required fields"); return false;}
        if (!expression.test(mail)) {showError("Email not valid"); return false;}
        const found = users.some((el: {email: string;}) => el.email == mail);
        if (found) {showError("Account with this email already exists"); return false;}
        if (pass != confirm) {showError("Passwords do not match"); return false;}
        
        const user = {email: mail, password: pass};
        users.push(user);
        sessionStorage.setItem("usersData", JSON.stringify(users));

        const succBox = document.getElementById("success");
        succBox.style.display = "block";
        succBox.innerHTML = "<p>Account created successfully</p>";

        console.log(users)
        return true;
    }

    function logIn(): boolean {
        failBox.style.display = "none";

        const mail = (document.getElementById("mailInput") as HTMLInputElement).value;
        const pass = (document.getElementById("passInput") as HTMLInputElement).value;
        
        const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
        if (mail.trim() == "" || pass.trim() == "") {showError("Fill in all the required fields"); return false;}
        if (!expression.test(mail)) {showError("Email not valid"); return false;}
        
        const index = users.findIndex((el: {email: string;}) => el.email == mail);
        if (index == -1) {showError("Email or password incorrect"); return false;}
        if (users[index].password != pass) {showError("Email or password incorrect"); return false}

        window.location.href = "pages/success.html"
    }


    if (signUpBtn != null) {
        signUpBtn.addEventListener("click", signUp)
    }
    if (logInBtn != null) {
        logInBtn.addEventListener("click", logIn)
    }

}) 
