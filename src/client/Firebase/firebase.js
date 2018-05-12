import * as firebase from 'firebase';

// Initialize Firebase
let config = {
    apiKey: "AIzaSyAAFoJ2nHcxQB-FwPrr8SmPEYibiyy5L-8",
    authDomain: "yumi-project.firebaseapp.com",
    databaseURL: "https://yumi-project.firebaseio.com",
    projectId: "yumi-project",
    storageBucket: "gs://yumi-project.appspot.com",
    messagingSenderId: "491868186977"
};
firebase.initializeApp(config);
const storage = firebase.storage();
export {firebase, storage as default};