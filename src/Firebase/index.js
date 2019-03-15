import firebase from 'firebase/app';
import 'firebase/storage'
import "firebase/firestore";
var config = {
  apiKey: "AIzaSyDEK3H9mm_mlLk5s6GbtquMmjqynMTnE-Y",
  authDomain: "henglay-775ab.firebaseapp.com",
  databaseURL: "https://henglay-775ab.firebaseio.com",
  projectId: "henglay-775ab",
  storageBucket: "henglay-775ab.appspot.com",
  messagingSenderId: "238342746779"
};

firebase.initializeApp(config);


export { firebase as default }
