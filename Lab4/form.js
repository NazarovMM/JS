var firebaseConfig = {
  apiKey: "AIzaSyCu9aBjij95hgtIquC_oZtqD2ApDm1D0ec",
  authDomain: "jslab4.firebaseapp.com",
  databaseURL: "https://jslab4.firebaseio.com",
  projectId: "jslab4",
  storageBucket: "jslab4.appspot.com",
  messagingSenderId: "66393728860",
  appId: "1:66393728860:web:072d368dc79aabe8bdc399",
  measurementId: "G-DWQ5TGEYF7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  saveMessage(name, company, email, phone, message);

  document.querySelector('.alert').style.display = 'block';

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}