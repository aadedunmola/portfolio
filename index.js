function validate (){
    // alert('You are about to send a message, confirm with OK!');

    const name = document.myForm.fullName.value;
    const email = document.myForm.email.value;
    const contact = document.myForm.contact.value;
    const message = document.myForm.message.value;



    const name_err = document.querySelector(".name-err");

   
    if (name == "") {
     name_err.innerHTML = "Name field is required";
 
 }else{
    name_err.innerHTML = '';
  }
  

 const email_err = document.querySelector(".email-err");

 if(email == ''){
    email_err.innerHTML = 'Email field is required'
 }else{
    email_err.innerHTML = '';
  }
  

 const contact_err = document.querySelector('.subject-err');

 if(contact == ''){
    contact_err.innerHTML = 'Subject field is required';
 }else{
    contact_err.innerHTML = '';
  }
  


 return false;
};
























const btn = document.querySelector(".second");

btn.addEventListener("click", () => {
 
    let nav = document.querySelector('nav');
  
    if(nav.style.display == 'block'){
      nav.style.display = 'none';
      btn.src = './images/icon-menu.svg'
    } else{
      nav.style.display = 'block';
      
    }
  
  
  
  });
       