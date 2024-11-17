import { GoogleAuthProvider} from "firebase/auth/web-extension";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => { 
  try {
    const result = await singInWithGoogle(FireBaseAuth, googleProvider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);
  } catch (error) {
    
  }
};