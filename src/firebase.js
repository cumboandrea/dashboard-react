
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyB9hiwC4knxEM6IneN-zZ8XNp8QQxjcgDE",
  authDomain: "crud-react-bluuweb.firebaseapp.com",
  databaseURL: "https://crud-react-bluuweb.firebaseio.com",
  projectId: "crud-react-bluuweb",
  storageBucket: "crud-react-bluuweb.appspot.com",
  messagingSenderId: "1047545696160",
  appId: "1:1047545696160:web:b7576feff40a21fdfc9ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth };