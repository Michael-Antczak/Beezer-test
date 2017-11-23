import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC-DKe25AYyLKbJhYxKwAJbO0Te83g1ByI",
    authDomain: "beezer-353453.firebaseapp.com",
    databaseURL: "https://beezer-353453.firebaseio.com",
    projectId: "beezer-353453",
    storageBucket: "beezer-353453.appspot.com",
    messagingSenderId: "531879191170"
};

const fire = firebase.initializeApp(config);

export default fire;