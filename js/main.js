// ======================= toggle ===========

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
// ======================= end toggle ===========




// get input from user 

var emailInput = document.getElementById("floatingInput");
var passwordInput = document.getElementById("floatingPassword");
var btnLogin = document.querySelector(".loginForm");
var form = document.querySelector("form")

var users =[];

if(localStorage.getItem("users")!= null){
    users = JSON.parse(localStorage.getItem("users"))
    console.log(users)
};
var usersSession = [];
function addUser(){
    for ( var i = 0 ; i<users.length ; i++){
        if (users[i].email === emailInput.value && users[i].pass === passwordInput.value ){
            var userSession = {
                name : users[i].name ,
                email : users[i].email ,
                pass : users[i].pass ,
            }
            usersSession.push(userSession);
            
            window.location.href = "home.html" ;
            sessionStorage.setItem("userSession" , JSON.stringify(usersSession) );
        }else{
            Swal.fire("invalid Input");
        }   
    }
};

form.addEventListener("submit" , function(e){
    e.preventDefault();
});
btnLogin.addEventListener("click",addUser);








var SignUp = document.getElementById("home");
var BtnSup = document.getElementById("BtnsignUp");


BtnSup.addEventListener("click",function(){
    window.location.href =  "siginUp.html";
    console.log(SignUp);
    
})




















// var home=document.getElementById("home");
// var Login=document.getElementById("Login");
// if(true){
//     document.body.innerHTML= home
// }