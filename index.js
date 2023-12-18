const form = document.getElementById("form");
const uname = document.getElementById("uname");
const mail = document.getElementById("mail");
const pswd = document.getElementById("pswd");
const dt = document.getElementById("date");
let popup = document.getElementById("popup");
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    let b1 = new Boolean(false);
    let b2 = new Boolean(false);
    let b3 = new Boolean(false);
    const nameval = uname.value.trim();
    const mailval = mail.value.trim();
    const pswdval = pswd.value.trim();
    if(nameval===""){
        errorMsg(uname,"Enter a valid name");
        b1=false;
    }
    else{
        successMsg(uname);
        b1=true;
    }

    if(mailval===""){
        errorMsg(mail,"No blank emails");
        b2=false;
    }
    else if(!isEmail(mailval)){
        errorMsg(mail,"This email is not valid");
        b2=false;
    }
    else{
        successMsg(mail);
        b2=true;
    }
    if(pswdval.length <6){
       errorMsg(pswd,"Password must contain atleast 6 characters"); 
       b3=false; 
    }
       
    else if(!(/[A-z]/.test(pswdval))){
        errorMsg(pswd,"Atleast lower or Uppercase character");
        b3=false;
    }
    else if(!(/[0-9]/.test(pswdval))){
        errorMsg(pswd,"Atleast 1 number");
        b3=false;
    }
    else if(!(/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/.test(pswdval))){
        errorMsg(pswd,"Must contain special charcater");
        b3=false;
    }
    else{
        successMsg(pswd);
        b3=true;
    }
    if(b1 && b2 && b3){
       submitpopup();
       form.value="";
       uname.value="";
       mail.value="";
       pswd.value="";
       dt.value="";
    }
        

}
function errorMsg(input, message) {
    const inCtrl = input.parentElement;
    const small = inCtrl.querySelector('small');
    inCtrl.className = 'in-ctrl error';

    small.innerText = message;
}
function successMsg(input){
    const inCtrl = input.parentElement;
    inCtrl.className = 'in-ctrl success';
}
function isEmail(mail){
    return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}
function submitpopup(){
    popup.classList.add("submitpopup");
}
function closepopup(){
    popup.classList.remove("submitpopup");
}
