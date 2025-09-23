document.getElementById("login").onclick=function(){
    var identered=document.getElementById("id").value;
    var actualid="muazim6655";
    var passentered=document.getElementById("pass").value;
    var actualpass="@6655";
    if(identered==actualid && passentered==actualpass){
        document.write("Login successfully!")
    }else if(identered!=actualid && passentered!=actualpass ){
        alert("Enter correct id and password!")
    }else if(identered!=actualid){
        alert("Enter correct id!")
    }
    else{
        alert("Enter correct password!")
    }

}