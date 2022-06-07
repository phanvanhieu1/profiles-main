const contactForm = document.querySelector('.contact-form');
let Name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
        name: Name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        if(xhr.responseText == 'success'){
            alert('Gửi tin nhắn thành công');
            Name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }else{
            alert('Không thể gửi tin nhắn');
        }
    }

    xhr.send(JSON.stringify(formData));
})