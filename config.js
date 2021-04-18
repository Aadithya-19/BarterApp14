import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCIJidF_uvJnK3BPFZOVdfWbnfk-YXMEGo",
    authDomain: "barterapp-66b8a.firebaseapp.com",
    projectId: "barterapp-66b8a",
    storageBucket: "barterapp-66b8a.appspot.com",
    messagingSenderId: "598674709586",
    appId: "1:598674709586:web:e90c1a8184e926fd80d38b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();