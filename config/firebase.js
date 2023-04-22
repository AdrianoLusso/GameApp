import {API_KEY,AUTH_DOMAIN,PROJECT_ID,STORAGE_BUCKET,MESSAGING_SENDER_ID,APP_ID} from '@env'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/storage';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN ,
  projectId:PROJECT_ID,
  storageBucket: STORAGE_BUCKET ,
  messagingSenderId: MESSAGING_SENDER_ID ,
  appId: APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = getFirestore();
export {firebase,database}