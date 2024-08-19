const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Name: ${fullName.value} \n Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;

  Email.send({
    Host : "smtp.elasticemail.com",
          Username : "yanne.kouassi@uvci.edu.ci",
          Password : "40A5AF5F062870189898B00CD602432FC8C6",
          To : 'will.fresh225@gmail.com',
          From : "yanne.kouassi@uvci.edu.ci",
          Subject : subject.value,
          Body : bodyMessage
  }).then(
  message => {
    if(message == 'OK'){
      Swal.fire({
        title: "Success!",
        text: "Message send successfully, I will Answer as soon as possible!",
        icon: "success"
      });
    }
    form.reset();
  }
  );
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  sendEmail();
})