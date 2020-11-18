import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyCkOUhLV5RgG6oJqu5IIFVM28dnnDqyyzc",
  authDomain: "lunch-app-c819b.firebaseapp.com",
  databaseURL: "https://lunch-app-c819b.firebaseio.com",
  projectId: "lunch-app-c819b",
  storageBucket: "lunch-app-c819b.appspot.com",
  messagingSenderId: "429201586768",
  appId: "1:429201586768:web:c76b3c5e7345beb0326f55",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
