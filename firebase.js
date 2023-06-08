// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import Config from 'react-native-config';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = Config.FIREBASE_API_KEY;
const authDomain = Config.FIREBASE_AUTH_DOMAIN;
const projectId = Config.FIREBASE_PROJECT_ID;
const storageBucket = Config.FIREBASE_STORAGE_BUCKET;
const messagingSenderId = Config.FIREBASE_MESSAGING_SENDER_ID;
const appId = Config.FIREBASE_APP_ID;
const measurementId = Config.FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export {db, auth};
// const analytics = getAnalytics(app);
