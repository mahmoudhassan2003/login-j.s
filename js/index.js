//----------------------------sign-up-----------------------------------------------------

let arrsiginUp=[];
let siginUpName=document.querySelector(".siginUpName");
let siginUpEmail=document.querySelector(".siginUpEmail");
let siginUpPassword=document.querySelector(".siginUpPassword");
let btnSignUp=document.querySelector(".btnSignUp");
if(localStorage.getItem("value")!=null){
    arrsiginUp=JSON.parse(localStorage.getItem("value"));
}

function getValueSiginUp(){
   
    let getValue={
        Name:siginUpName.value.toLowerCase() ,
        Email:siginUpEmail.value,
        Password:siginUpPassword.value,
    }
    if (siginUpName.value!=""&&siginUpEmail.value!=""&&siginUpPassword.value!=""){
        if (emailChecking(arrsiginUp,siginUpEmail)==false) {
            arrsiginUp.push(getValue)
                console.log(arrsiginUp)
                 clear()
                 document.querySelector(".text").innerHTML="Success"
                 document.querySelector(".text").classList.remove("text-danger")
                 document.querySelector(".text").classList.add("text-success")
                localStorage.setItem("value", JSON.stringify(arrsiginUp));
                pageRedirect()
        }
        else{
            document.querySelector(".text").innerHTML="email already exists"
            document.querySelector(".text").classList.add("text-danger")
            document.querySelector(".text").classList.remove("text-success")
        }
}
    else{
         document.querySelector(".text").innerHTML="All inputs is required";
         document.querySelector(".text").classList.add("text-danger")
         document.querySelector(".text").classList.remove("text-success")
         
    }
};

function clear(){
    siginUpName.value=null
    siginUpEmail.value=null
   siginUpPassword.value=null
}
function emailChecking(arrSignUp, signUpEmail) {
    for (var i = 0; i < arrSignUp.length; i++) {
        if (arrSignUp[i].Email === signUpEmail.value) {
            return true;
        }
    }
    return false;
}
function pageRedirect() {
    window.location.replace("index.html");
} 


// ---------------------------------------------login-----------------------------------------

let loginEmail=document.querySelector(".LoginEmail");
let loginPassword=document.querySelector(".LoginPassword");
let loginBtn=document.querySelector(".LoginBtn");

function getValueLgin() {
    let arrSignUp = JSON.parse(localStorage.getItem("value")) || [];
    let email = loginEmail.value;
    let password = loginPassword.value;
    if (password===""&&email===""){
        
        document.querySelector(".info").innerHTML="All inputs is required";
        document.querySelector(".info").classList.add("text-danger")
        document.querySelector(".info").classList.remove("text-success")
    }
    else{
    for (var i = 0; i < arrSignUp.length; i++) {
        
        if (arrSignUp[i].Email === email && arrSignUp[i].Password === password) {
            localStorage.setItem('Name', arrSignUp[i].Name);
            window.location.replace("home.html");
          }
        else if(arrSignUp[i].Email === email){
            document.querySelector(".info").innerHTML="The password is incorrect"
            document.querySelector(".info").classList.add("text-danger")
            return;
        }
        else if(arrSignUp[i].Password === password){
            document.querySelector(".info").innerHTML="The Email is incorrect"
            document.querySelector(".info").classList.add("text-danger")
            return
        }
        else{
            document.querySelector(".info").innerHTML="Wrong email and password" 
        }
      
    }
}

}

    if (localStorage.getItem("Name") != null) {
        document.querySelector('.nameHome').innerHTML = `Welcome ${localStorage.getItem('Name')}`;
    }

  function logout(){
    window.location.replace("index.html")
  }
    