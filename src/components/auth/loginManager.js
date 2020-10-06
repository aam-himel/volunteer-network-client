import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

export const googleSignIn = () => {
   const provider = new firebase.auth.GoogleAuthProvider();

   return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
         return res;
         // console.log(res);
      })
      .catch((err) => {
         console.log(err);
         let errorMsg = err.message;
         console.log("Error", errorMsg);
      });
};
