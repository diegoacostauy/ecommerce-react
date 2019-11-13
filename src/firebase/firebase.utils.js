import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD-BA6tmNGH-OnxQwRi3nwjAIdjI6ukHms",
  authDomain: "ecommerce-react-ab342.firebaseapp.com",
  databaseURL: "https://ecommerce-react-ab342.firebaseio.com",
  projectId: "ecommerce-react-ab342",
  storageBucket: "ecommerce-react-ab342.appspot.com",
  messagingSenderId: "813296868054",
  appId: "1:813296868054:web:c7e5bd11f2e6df9c1d8777",
  measurementId: "G-BWLZWMT3WQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;