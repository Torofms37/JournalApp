import { loginWithEmailAndPassword, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./";

export const checkingAuthentications = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    
    return dispatch(login(result))
  }
};

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, displayName});    
    if (!ok) return dispatch(logout({errorMessage}));
    dispatch(login({uid, photoURL, email, displayName}))
  }
}

export const startLoginWithEmailAndPassword = async({email, password}) => {
  return async(dispatch) => {
  dispatch(checkingCredentials())
  const result = await loginWithEmailAndPassword({email, password});
  console.log(result);
  if (!result.ok) return dispatch(logout(result));
  dispatch(login(result))
  
  }
}