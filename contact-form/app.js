

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  
  //caliing send email function
  sendEmail(name, email, message);

  document.querySelector(".contact-form").reset();
}


 //send email function

 function sendEmail(name, email,message) {
   // body...
   Email.send({
    Host : "smtp.yourisp.com",
    Username : "clashofclane.pb@gmail.com",
    Password : "ziftehomdcladhzy",
    To : 'clashofclane.pb@gmail.com',
    From : "clashofclane.pb@gmail.com",
    Subject : "${name} fill new contact form",
    Body : "name: ${name} <br/> Email: ${email} <br/> Message: ${message}"
    }).then(
      message => alert('Successfully submitted')
    );
 }