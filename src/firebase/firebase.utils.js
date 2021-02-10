import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC3DKA-QAkgufp4_eKJ8Wx7JjzHIFA2tkQ",
    authDomain: "cloth-store-e79b2.firebaseapp.com",
    projectId: "cloth-store-e79b2",
    storageBucket: "cloth-store-e79b2.appspot.com",
    messagingSenderId: "898222402666",
    appId: "1:898222402666:web:2c130954aa25e777d72e13",
    measurementId: "G-X5BLDV1L7J"
  };

  firebase.initializeApp(config);

  
  

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);
 
  //Firestore setup
  export const createUserProfile = async (userAuth, otherDetails) => {
      console.log(userAuth);
      if(!userAuth) return;
      const userRef = firestore.doc(`/users/${userAuth.uid}`);
      const snapshot = await userRef.get();

      if(!snapshot.exists) {
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...otherDetails
            });
          } catch(error) {
            console.log(error.message);
          }
      }

      return userRef;
  }


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export default firebase;