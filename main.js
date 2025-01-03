import { initializeApp } from "https:www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDx8rU6V4cmSxw9pFwHRv153nwFWRLns_s",
  authDomain: "login-and-signup-374b4.firebaseapp.com",
  projectId: "login-and-signup-374b4",
  storageBucket: "login-and-signup-374b4.firebasestorage.app",
  messagingSenderId: "271706994485",
  appId: "1:271706994485:web:ddb7e507ffe75d14ab3e7c",
  measurementId: "G-55HHYKQQ54"
};

const app = initializeApp(firebaseConfig);

let signup_btn = document.getElementById("signup") ;

signup_btn.addEventListener ("click" , function (){ 
    let email = document.getElementById("email");
    let username = document.getElementById("Username");
    let password = document.getElementById("pass");
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, username.value , password.value)
    .then((userCredential) => {
        // Signed up 
    const user = userCredential.user;
    // ...
    console.log(`userdata${user}`);
    
})

.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(`error${errorMessage}`);
    
});

})

// //  login function
// let login_btn = document.getElementById("login") ;

// //   const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//       const errorCode = error.code;
//     const errorMessage = error.message;
// });




document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
  
    loginBtn.addEventListener("click", () => {
      loginBtn.classList.add("active");
      signupBtn.classList.remove("active");
      loginForm.classList.add("active");
      signupForm.classList.remove("active");
    });
  
    signupBtn.addEventListener("click", () => {
      signupBtn.classList.add("active");
      loginBtn.classList.remove("active");
      signupForm.classList.add("active");
      loginForm.classList.remove("active");
    });
  });