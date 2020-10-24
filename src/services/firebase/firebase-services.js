import firebase from 'firebase'
import { configurationFirebase } from './firebase-configuration';
require('firebase/auth');

//OAuth2
firebase.initializeApp(configurationFirebase);

export const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider()
providerGoogle.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);

//FireStore

const firestoreRepository = firebase.firestore();


