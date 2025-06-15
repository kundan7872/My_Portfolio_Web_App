//function foe send smtp eamil
function Send() {


    let name = document.getElementById("Name").value;
    let emid = document.getElementById("Email").value;
    let mob = document.getElementById("mob").value;
    let sub = document.getElementById("subject").value;
    let mess = document.getElementById("message").value;

    let body = "Name: " + name + "<br/> Email:" + emid + "<br/> Contact Number:" + mob + "<br/> Message:" + mess;


    Email.send({
        SecureToken: "baeabb7c-560b-48ef-9a73-1c43c0b70dc7",
        To: 'kundansingh7872@gmail.com',
        From: "kundansingh7872@gmail.com",
        Subject: sub,
        Body: body
    }).then(
        message => {
            if (message == 'OK') {
                //using sweetalreet library
                console.log("send em");
                swal("Successfull", "Your Message Send Successfully ", "success");
            } else {
                  console.log("not send em");
                swal("Something Wrong", "Your Message is not Send", "error");
            }
        }
    );
}


document.addEventListener('DOMContentLoaded', function() {
    // Function to display error message
    function showError(element, message) {
        var errorContainer = document.getElementById(element.id + '-error');
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.id = element.id + '-error';
            element.parentNode.appendChild(errorContainer);
        }
        errorContainer.innerHTML = message;
    }

    // Function to remove error message
    function clearError(element) {
        var errorContainer = document.getElementById(element.id + '-error');
        if (errorContainer) {
            errorContainer.innerHTML = '';
        }
    }

    // Function to validate the form
    function validateForm() {
        var name = document.getElementById('Name');
        var email = document.getElementById('Email');
        var contact = document.getElementById('mob');
        var subject = document.getElementById('subject');
        var message = document.getElementById('message');

        // validation 
        if (name.value.trim() === '') {
            showError(name, '<h3>Full Name is required</h3>');
        } else {
            clearError(name);
        }

        if (email.value.trim() === '') {
            showError(email, '<h3>Email Address is required</h3>');
        } else {
            clearError(email);
        }

        if (contact.value.trim() === '') {
            showError(contact, '<h3>Mobile number is requir</h3>');
        } else {
            clearError(contact);
        }

        if (subject.value.trim() === '') {
            showError(subject, '<h3>Email Subject is requir</h3>');
        } else {
            clearError(subject);
        }

        if (message.value.trim() === '') {
            showError(message, '<h3>Your message is requir</h3>');
        } else {
            clearError(message);
        }

        //  validation for email format
        var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailCheck.test(email.value.trim())) {
            showError(email, '<h3>Please enter a valid email address</h3>');
        }

        // validation for phone number format
        var phoneCheck = /^[0-9]+$/;
        if (!phoneCheck.test(contact.value.trim())) {
            showError(contact, '<h3>Please enter a valid phone number</h3>');
        }

        //  error messages are show
        var errorMessages = document.querySelectorAll('.input-box div');
        for (var i = 0; i < errorMessages.length; i++) {
            if (errorMessages[i].innerHTML !== '') {
                return false;
            }
        }

        // all validations pass, the form can be submitted and input tag clear
        Send();
        name.value = '';
        email.value = '';
        contact.value = '';
        subject.value = '';
        message.value = '';

        return true;

    }


    document.getElementById('btn').addEventListener('click', function(event) {
        if (!validateForm()) {
            event.preventDefault();

        }
    });
});