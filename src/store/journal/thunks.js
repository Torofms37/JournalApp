import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {

    //Todo: tarea dispatch


    dispatch(savingNewNote())

    const {uid} = getState().auth;
    
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }
    const newDoc = doc(collection(FireBaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);
    
    newNote.id = newDoc.id;

    //! dispatch new note to store
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
    
  }
}