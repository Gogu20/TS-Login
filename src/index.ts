
class User {
    mail: string;
    pass: string; 

    constructor(mail: string, pass: string) {
        this.mail = mail;
        this.pass = pass;
    }
}

function passwordCheck(password: string, confirmation: string): boolean {
    if(password != confirmation) {
        const failBox = document.getElementById("fail");
        failBox.style.visibility = "visible";
        const fail = document.createElement("p");
        fail.textContent = "Passwords do not match";
        return false;
    } else return true
}

function signUp(mail: string, pass: string, confirm: string): boolean {
    
    mail = (document.getElementById("mailInput") as HTMLInputElement).value;
    pass = (document.getElementById("passInput") as HTMLInputElement).value;
    confirm = (document.getElementById("confirmInput") as HTMLInputElement).value;
    
    if (!passwordCheck(pass, confirm)) return false;
    /*if (.carModel && Car.carYear && Car.carPrice)
    {
        return User
    }
    else
    {
        window.alert("Fill in all spaces")
    }*/
}