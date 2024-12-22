



var nameVar = document.querySelector(".nameVar");
var btnLogOut = document.querySelector(".btnLogOut");
var user =[12] ;
 if (sessionStorage.getItem("userSession") != null){
    user = JSON.parse(sessionStorage.getItem("userSession"));
    console.log(user)
 }

var users = [];

if(localStorage.getItem("users")!= null){
    users = JSON.parse(localStorage.getItem("users")) 
    console.log(users)
}

for ( var i = 0 ; i<users.length ; i++){
    if (users[i].email === user[0].email && users[i].pass === user[0].pass && users[i].name === user[0].name ){
        nameVar.innerHTML = user[0].name ;
    }  
}


btnLogOut.addEventListener("click" , function(){
    sessionStorage.removeItem("userSession");
    window.location.href = "index.html" ;
});

