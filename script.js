const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



function checkForm(el){
    var username= el.username.value;
    var email= el.email.value;
    var phone= el.phone.value;
    var message= el.message.value;
    var GJ='';
    var error='';
    if(username.length<3){
        error="Please write a real name!";
    }
    else if(email.length<2 ){
        error="this email adress is not valide";
    }
    else if(!email.includes("@") ){
        error="you don't use a symbol @";
    }
    else if(phone.length<10||phone.length>10){
        error="the phone number is not valide write your number without (-/+/()) Example: 0123456789";
    }
    else if (phone.includes("-")||phone.includes("+"||phone.includes("(")||phone.includes(")"))){
        error="write your number without (-/+/()) Example: 0123456789"
    }
    else if(message.length<30){
        error="Write more information please";
    }
    else{
        GJ="The letter has been send!"
    }
    
    var block=document.getElementById("error");
    if (error != '') {
        block.style.color="red";
        document.getElementById('error').innerHTML = error;
    } else {
        
        block.style.color="green";
        document.getElementById('error').innerHTML = GJ;

    }



   
    return false;
}