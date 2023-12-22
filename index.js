var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('fullName').value;
    if(name.length == ''){
        nameError.innerHTML = 'Name required';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Full name required';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return  true;

}

function validatePhone(){
    var phone = document.getElementById('phone').value;

    if(phone.length !== 11){
        phoneError.innerHTML = '11digits only';
        return false;
    }

    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'Only digits allowed';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
}

function validateEmail(){
    var userEmail = document.getElementById('userEmail').value;

    if(userEmail.length == 0){
        emailError.innerHTML = 'Email required';
        return false;

    }
    if(!userEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'invalid email';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('msg').value;
    var required = 30;
    var msgLeft = required - message.length;

    // if(message <= 0){
    //     msgError.innerHTML = 'message required';
    //     return false;
    // }
    
    if(msgLeft > 0){
        msgError.innerHTML = msgLeft + ' more characters left';
        return false;
    }

    msgError.innerHTML = '<i class="fa-solid fa-square-check"></i>'
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() && !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fill all input fields';
        setTimeout(function(){
            submitError.style.display = 'none';

        }, 3000);
        return false;
    }
}