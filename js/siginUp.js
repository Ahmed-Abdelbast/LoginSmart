
// ============================ toggle ================
var toggleBtn = document.querySelector(".headForm button");
var toggleIcon = document.querySelector(".headForm button i");

toggleBtn.addEventListener("click",function(){
    if(toggleIcon.classList.contains("fa-toggle-on")){
        toggleIcon.classList.replace("fa-toggle-on","fa-toggle-off")
        toggleBtn.style.color="rgb(179, 176, 176)";
        document.body.style.backgroundColor="#242424";

    }else if(toggleIcon.classList.contains("fa-toggle-off")){
        toggleIcon.classList.replace("fa-toggle-off","fa-toggle-on")
        toggleBtn.style.color="rgb(38, 145, 217)";
        document.body.style.backgroundColor="white";

    }

});
// ============================ end toggle ============


var inputName = document.getElementById("floatingInputName");
var inputEmail = document.getElementById("floatingInputEmail");
var inputPass = document.getElementById("floatingInputPassword");
var btnSiginUp = document.querySelector(".btnSiginUp");
var form = document.getElementById("formSubmit");
var btnLogin =document.querySelector(".btnLogin");


var regexName = /^[a-zA-Z]{6,12}$/
var regexEmail = /^[a-zA-Z0-9]{1,}(@gmail.com)$/
var regexPass = /^(\w{8}\W{1})$/


var users = [];



if(localStorage.getItem("users")!= null){
    users = JSON.parse(localStorage.getItem("users"))
    
}




function siginUp(){
    

    var user = {
        name : inputName.value ,
        email : inputEmail.value ,
        pass : inputPass.value 

    };

    if(validationInput(inputName.value , regexName ) && validationInput(inputEmail.value , regexEmail ) && validationInput(inputPass.value , regexPass )){
        
        
        users.push(user);
        
        localStorage.setItem("users",JSON.stringify(users));
    }else{
        Swal.fire("invalid Input");
    };

    

};
form.addEventListener("submit" , function(e){
    e.preventDefault();
    
});
btnSiginUp.addEventListener("click",function(){
    siginUp();
    clearInput();
});



function validationInput(Input,regexInput){
    
    if(regexInput.test(Input)=== true){
         return true
    }else{

        return false
    }
       
    
};

function clearInput(){
    inputName.value = "";
    inputEmail.value = "" ;
    inputPass.value = "" ;


};



btnLogin.addEventListener("click",function(){
    window.location.href = "index.html" ;
});
