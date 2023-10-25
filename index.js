/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/_app';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyChnWiMqSOmZFyhsXA_ZxhGugu1ALrSqcQ",
//     authDomain: "facenet-uat.firebaseapp.com",
//     projectId: "facenet-uat",
//     storageBucket: "facenet-uat.appspot.com",
//     messagingSenderId: "749914565984",
//     appId: "1:749914565984:web:52765bba1dc0b8ed4dc205",
//     // databaseURL: 'https://facenet-uat-default-rtdb.asia-southeast1.firebasedatabase.app'
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
