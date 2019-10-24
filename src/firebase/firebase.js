import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyA-41EtEUCUy54AwBKs9CdnsGJtD1NYMMI",
    authDomain: "van-on.firebaseapp.com",
    databaseURL: "https://van-on.firebaseio.com",
    projectId: "van-on",
    storageBucket: "van-on.appspot.com",
    messagingSenderId: "1022152519715",
    appId: "1:1022152519715:web:cf4ac2d22e096170"
}

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    login(email, password) {
        return this.auth.signOut();
    }

}

export default Firebase();