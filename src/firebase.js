import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBpfrrWn7l54NHS8KWxoXhT0SzXFeTeKk",
  authDomain: "clone-project-6063b.firebaseapp.com",
  projectId: "clone-project-6063b",
  storageBucket: "clone-project-6063b.appspot.com",
  messagingSenderId: "1049441722789",
  appId: "1:1049441722789:web:408fb26f827fe846dcc84c",
  measurementId: "G-Y70Y73TK3T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
