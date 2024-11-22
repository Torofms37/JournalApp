import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'})

export const singInWithGoogle = async() => { 
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
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

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL} = resp.user;
    return {
      ok: true,
      // user info
      uid,
      displayName,
      email,
      photoURL,
    };
  } catch (error) {
    return {ok: false, errorMessage: error.message}
  }
}