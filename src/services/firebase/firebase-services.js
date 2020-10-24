import firebase from 'firebase';
import { configurationFirebase } from './firebase-configuration';
require('firebase/auth');

//OAuth2
firebase.initializeApp(configurationFirebase);

export const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
providerGoogle.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);

//FireStore

const firestoreRepository = firebase.firestore();

export const createUserDocument = async (currentUser) => {
  const queryUser = await firestoreRepository.doc(`users/${currentUser.uid}`);
  const snapShotUser = await queryUser.get();

  const { email, photoURL, displayName } = currentUser;
  if (!snapShotUser.exists) {
    try {
      await queryUser.set({ email, photoURL, displayName });
    } catch (error) {
      console.log(error);
    }
  }

  return queryUser;
};
