import firebase, { initializeApp } from 'firebase';

const config = {
    apiKey: "AIzaSyD2JOpaNWu1vaujPaND10l_OW9SmYTXyj8",
    authDomain: "keep-your-notes.firebaseapp.com",
    databaseURL: "https://keep-your-notes.firebaseio.com",
    projectId: "keep-your-notes",
    storageBucket: "keep-your-notes.appspot.com",
    messagingSenderId: "827425171025",
    appId: "1:827425171025:web:9afdc7985b378614183a70",
    measurementId: "G-PR3FYHYFBH"
};

firebase.initializeApp(config);

export default firebase;