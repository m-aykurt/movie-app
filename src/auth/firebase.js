import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDFSg9nUCTuRv7T3jDr3b2uvrmXI7IV0CY",
    authDomain: "movie-app-82762.firebaseapp.com",
    projectId: "movie-app-82762",
    storageBucket: "movie-app-82762.appspot.com",
    messagingSenderId: "83952494429",
    appId: "1:83952494429:web:7e293f219c3c7306deeab4",
    measurementId: "G-X681E8KTCD"
});
export const createUser = async (email, password, displayName) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ..
      });
    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName });
  } catch (error) {
    alert(
      "There exists an account with this email. Please login with your password or continue with Google!"
    );
  }
};
export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      // var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      alert("The password is invalid or the user does not have a password!");
    });
};
export const signOut = () => {
  firebase.auth().signOut();
};
export const userObserver = async (setCurrentUser) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });
};
export const signUpProvider = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  firebase.auth().signInWithPopup(provider);
};
export const forgotPassword = (email) => {
  firebase.auth().sendPasswordResetEmail(email);
  alert("Please check your mail box!");
};
export default firebaseApp;



