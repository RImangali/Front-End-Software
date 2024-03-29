const Username = document.getElementById('username_up');
const Email =  document.getElementById('email_up'); 
const Password = document.getElementById('password_up');
const Name = document.getElementById('name_up');
const Surname = document.getElementById('surname_up');
const sign_up = document.getElementById('sign_up');
const sign_in = document.getElementById('sign_in');

const url_up = "http://192.168.1.213:8080/auth/sign-up";

function sendRequest_up(){
  function switchTab_up(tabToShowId, tabToHideId) {
    var tabToShow = document.getElementById(tabToShowId);
    var tabToHide = document.getElementById(tabToHideId);
  
    tabToShow.style.display = "grid";
    tabToHide.style.display = "none";
  
    var tab1 = document.getElementById('tab1');
    var tab2 = document.getElementById('tab2');
  
    if (tabToShowId === 'sign_in') {
        tab1.classList.add('is_active');
        tab2.classList.remove('is_active');
    } else {
        tab2.classList.add('is_active');
        tab1.classList.remove('is_active');
    }
  }

  const body = {
    username: Username.value,
    email: Email.value,
    password: Password.value,
    name: Name.value,
    surname: Surname.value
  }

  const options = {
    method: 'POST', // Or 'POST' if you want to send a POST request
    headers: {
        'Content-Type': 'application/json' // Specify the content type if sending JSON data
    },
    body: JSON.stringify(body) // Use this line if you want to send data with the request (for POST requests)
  };

  fetch(url_up, options)
  .then(response => {
      if (response.ok) {
          return response.json(); // Parse the JSON response
      } else {
          throw new Error('Failed to send request');
      }
  })
  .then(token => {
      console.log('Request was successful!');
      console.log('Response:', token); // Print the response from the server
      Username.value = '';
      Email.value = '';
      Password.value = '';
      Name.value = '';
      Surname.value = '';
      switchTab_up(sign_in, sign_up);
  })
  .catch(error => {
      console.error('Error:', error.message);
  });
}