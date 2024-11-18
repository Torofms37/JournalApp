import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'})

export const singInWithGoogle = async() => { 
  try {
    const result = await signInWithPopup(FireBaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    // console.log({credentials});
    const { displayName, email, photoURL, uid } = result.user
    return {
      ok: true,
      // user info
      uid,
      displayName,
      email,
      photoURL,
    }
    
  } catch (error) {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
    }
  }
};