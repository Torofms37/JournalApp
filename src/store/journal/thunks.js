import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers";

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

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if(!uid) throw new Error('El UID del usuario no existe');
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  }
}

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    const noteToFirestore = {...note};
    delete noteToFirestore.id;
    
    const docRef = doc(FireBaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore, {merge: true})
    dispatch(updateNote(note))
  }
};