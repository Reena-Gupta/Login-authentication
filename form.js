const firebaseConfig = {
    apiKey: "AIzaSyBgOycFzNekyG_08hCttmWluZdTP_p-skE",
    authDomain: "login-67528.firebaseapp.com",
    projectId: "login-67528",
    storageBucket: "login-67528.appspot.com",
    messagingSenderId: "776603911287",
    appId: "1:776603911287:web:1e78eedd2db8700c793272",
    measurementId: "G-T8Q3DSSTLM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email1 = document.getElementById("email1");
    var password1 = document.getElementById("password1");

    const promise = auth.createUserWithEmailAndPassword(email1.value,password1.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Login Successfully");
    
  }
