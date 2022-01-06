
const portfolioItems = document.querySelectorAll(".item-wrapper")

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener("mouseover", () => {
        portfolioItem.childNodes[1].classList.add("img-darken");
    })
    portfolioItem.addEventListener("mouseout", () => {
        portfolioItem.childNodes[1].classList.remove("img-darken");
    })
})

let modal = document.getElementById("modal");
var btn1 = document.getElementById("portfolioBtn1");
var close = document.getElementById("close");

if(btn1) {
btn1.addEventListener('click', function () {
      modal.classList.add('show');
      setTimeout(() => {
          modal.classList.add('visuallyshow');
      }, 1.5);
  }, false);
}

if(close) {
close.addEventListener("click", function() {
  modal.classList.remove("visuallyshow");
  setTimeout(function() {
    modal.classList.remove("show");
  }, 1500);
})
}

let modal2 = document.getElementById("modal2");
let btn2 = document.getElementById("portfolioBtn2");
let close2 = document.getElementById("close2");

if(btn2){
btn2.addEventListener('click', function () {

    modal2.classList.add('show2');
    setTimeout(() => {
        modal2.classList.add('visuallyshow2');
    }, 1.5);
}, false);
}

if(close2){
close2.addEventListener("click", function () {
    modal2.classList.remove("visuallyshow2");
    setTimeout(function () {
        modal2.classList.remove("show2");
    }, 1500);
})
}

let modal3 = document.getElementById("modal3");
let btn3 = document.getElementById("portfolioBtn3");
let close3 = document.getElementById("close3");

if(btn3){
btn3.addEventListener('click', function () {
    modal3.classList.add('show3');
    setTimeout(() => {
        modal3.classList.add('visuallyshow3');
    }, 1.5);
}, false);
}

if(close3){
close3.addEventListener("click", function () {
    modal3.classList.remove("visuallyshow3");
    setTimeout(function () {
        modal3.classList.remove("show3");
    }, 1500);
})
}

// //when the user clicks anywhere outside the modal, close it.
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }

function showEmail() {
  document.getElementById("emailAddressMobile").classList.toggle("fade");
  document.getElementsByClassName("fas.fab.fa-envelope.fa-3x").style.opacity = "0";
  }


//ContactForm**************************************************************

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBQ5nRRz0XwQgNgBjHAuz-ILGOUFS62zMk",
    authDomain: "emaildata-17db3.firebaseapp.com",
    databaseURL: "https://emaildata-17db3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "emaildata-17db3",
    storageBucket: "emaildata-17db3.appspot.com",
    messagingSenderId: "985706063821",
    appId: "1:985706063821:web:08e74b057de7d18bd68684",
    measurementId: "G-P7736PTCNX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference contactInfo collections
  let contactInfo = firebase.database().ref("infos");


  var contactForm = document.getElementById("form");
// Listen for a submit
if(contactForm){
contactForm.addEventListener("submit",
submitForm);
}

function submitForm(e) {
    e.preventDefault();

    reset();
    checkInputs(); //val
}

//Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();
  
  newContactInfo.set({
    contactname: name,
    email: email,
    message: message,
  });
}

function showSucces() {
document.getElementById("submitButton").classList.add("clicked");
document.getElementById("submitButton").classList.remove('hover');
document.getElementById("submitButton").classList.remove('active');
setTimeout(() => {
  document.getElementById("submitButton").classList.remove("clicked");
}, 4000);
}

// //function to animate the submitbutton 
// const btn = document.querySelector("#submitButton");

// btn.addEventListener("click", () => {
//   btn.classList.add("clicked");
//   setTimeout(() => {
//     btn.classList.remove("clicked");
//   }, 6000);
// });


//Send Email function
function sendEmail(name, email, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "liaraskara@gmail.com",
    Password: "abgzoisxxtiaizfl",
    To: "liaraskara@gmail.com",
    From: "liaraskara@gmail.com",
    Subject: `${name} sent you a message`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
  }).then((message) => showSucces());
}

//form validaton
const namecontact = document.getElementById('namecontact'); //Val
const email = document.getElementById('email'); //Val
const message = document.getElementById('message'); //Val


function checkInputs() {
  
  //Get the values from the inputs
  const nameValue = namecontact.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  const numbers = /^[0-9]+$/;

  if(nameValue === '') {
    setErrorFor(namecontact, "Name cannot be blank.");
  } 
  // else {setSuccesFor(namecontact);
  // }

  if(nameValue.match(numbers)) {
    setErrorFor(namecontact, "Name can not contain number(s).");
  } 
  // else {setSuccesFor(namecontact);
  // }

  if(emailValue === '') {
    setErrorFor(email, "Email cannot be blank."); 
   
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid.');
  } 
  // else {setSuccesFor(email);
  // }

  if(messageValue === '') {
    setErrorFor(message, "Message cannot be blank.");
  } 
  // else {setSuccesFor(message);
  // }

  stopSendingData();
}

function setErrorFor(input, errorMessage) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector('small');
  //add error message inside small
  small.innerText = errorMessage;
// add error class
formControl.className = 'form-control error';
}

// function setSuccesFor() {
//   const formControl = input.parentElement; //.form-control
//     formControl.className = "form-control"; 
// }

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// // //Stop sending email when there is an error
function stopSendingData() {
	const small = document.getElementsByTagName('small');

	for(i = 0; i < small.length; i++) {
		if(small[i].parentElement.classList.contains('error')){
return false;
  } 
}

//Get input values
let name = document.querySelector(".name").value;
let email = document.querySelector(".email").value;
let message = document.querySelector(".message").value;
console.log(name, email, message);

saveContactInfo(name, email, message);

//Refresh after submit
document.querySelector(".contactForm").reset();

//Call send email function
sendEmail(name, email, message);
}



function reset() {
  const small = document.getElementsByTagName('small');

	for(i = 0; i < small.length; i++) {
		if(small[i].parentElement.classList.contains('error')) {
      small[i].parentElement.classList.remove('error');
    }
}}

function removeActiveSubmit() {

  // document.getElementById("submitButton").querySelectorAll.remove('hover');
  // document.getElementById("submitButton").querySelectorAll.remove('active');
}
