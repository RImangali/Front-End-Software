const userName_in = document.getElementById('username_in');
const passWord_in = document.getElementById('password_in');
const errorMessage = document.getElementById('errorMessage');

const url = "http://192.168.1.213:8080/auth/sign-in"
let userName;
let currentToken;

function sendRequest(){
  errorMessage.style.display = "none";
  const body = {
    username: userName_in.value,
    password: passWord_in.value
  }
  
  const options = {
    method: 'POST', // Or 'POST' if you want to send a POST request
    headers: {
        'Content-Type': 'application/json' // Specify the content type if sending JSON data
    },
    body: JSON.stringify(body) // Use this line if you want to send data with the request (for POST requests)
  };

  fetch(url, options)
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse the JSON response
        } else {
            errorMessage.style.display = "grid";
        }
    })
    .then(token => {
        console.log('Request was successful!');
        console.log('Response:', token); // Print the response from the server
        userName = Username.value;
        currentToken = token;
        if(token != null){
          openHTMLFile('index.html');
        }
        else{
          errorMessage.style.display = "grid";
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

    function openHTMLFile(htmlFile) {
      window.location.href = htmlFile;
    }
}
