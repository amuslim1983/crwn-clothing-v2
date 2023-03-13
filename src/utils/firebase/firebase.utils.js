// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCuxxy8Mdbd5TrNxo0_SLsnyvV9liSAVTo',
  authDomain: 'crwn-clothing-db-3f2a1.firebaseapp.com',
  projectId: 'crwn-clothing-db-3f2a1',
  storageBucket: 'crwn-clothing-db-3f2a1.appspot.com',
  messagingSenderId: '845809240570',
  appId: '1:845809240570:web:2b89b3cafb65a9288abc43',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

const db = getFirestore();

export const CreateUserDocumentFromAuth = async (
  userAtuh,
  additionalInfo = {},
) => {
  const userDocRef = doc(db, 'users', userAtuh.uid);

  const userSnapshoot = await getDoc(userDocRef);
  if (!userSnapshoot.exists()) {
    const { displayName, email } = userAtuh;
    const createdOn = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdOn,
        ...additionalInfo,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  console.log(`passed email ${email} and Password: ${password}`);
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
