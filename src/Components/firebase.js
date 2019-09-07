import firebase from 'firebase/app';
import 'firebase/database';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOQutq67AiL2rcxS3ql3I2nU2rlmowEik",
  authDomain: "whitneyreidprojectfive.firebaseapp.com",
  databaseURL: "https://whitneyreidprojectfive.firebaseio.com",
  projectId: "whitneyreidprojectfive",
  storageBucket: "",
  messagingSenderId: "628019816631",
  appId: "1:628019816631:web:ba9a14595cb9d309f64532"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;