

// Listen for a submit
document.querySelector(".contact-mail").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".contact-name").value;
  let email = document.querySelector(".contact-email").value;
  let message = document.querySelector(".contact-msg").value;
  console.log(name, email, message);

  
  //caliing send email function
  sendUserEmail(name, email, message);
  


  document.querySelector(".contact-mail").reset();
}


 //send email function

 function sendUserEmail(name, email,message) {
   // body...
   Email.send({
    SecureToken: "d18881b4-d641-4ce5-87be-81e29d22f263",
    To : email,
    From : "contactformemail2020@gmail.com",
    Subject : "Contact form responce",
    Body : "Hii "+name+" <br/> Your responce submitted succeessfully!",
    }).then(function(responce){
      if(responce=='OK'){
        alert("Succeessfully submited!");
        sendMeEmail(name, email, message);
      }
      else{
        alert("Something went wrong!");
      }
    
    });
 }


 function sendMeEmail(name, email,message) {
   // body...
   Email.send({
    SecureToken: "d18881b4-d641-4ce5-87be-81e29d22f263",
    To : 'contactformemail2020@gmail.com',
    From : "contactformemail2020@gmail.com",
    Subject : name+" fill new contact form",
    Body : "name: "+name+" <br/> Email: " +email +"<br/> Message: "+message,
    });
 }
 