console.log("Sanity check!");

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';
import { getDatabase, get, child, ref, set } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCrd-85fjDDdqlXprbW66bisWYpaZg__qQ",
  authDomain: "vbis-test.firebaseapp.com",
  databaseURL: "https://vbis-test-default-rtdb.firebaseio.com",
  projectId: "vbis-test",
  storageBucket: "vbis-test.appspot.com",
  messagingSenderId: "182529087235",
  appId: "1:182529087235:web:f7d35def84014c6a2cfb36"
});

// const auth = getAuth(firebaseApp);
// //console.log(firebaseApp);
// onAuthStateChanged(auth, user => {
//   if(user != null){
//     console.log('logged in!');
//   } else {
//     console.log('No user');
//   }
// });

var db = getDatabase(firebaseApp);
