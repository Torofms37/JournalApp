import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
      isSaving: true,
      messageSaved: '',
      notes: [],
      // active: null,
      // active: {

      // }

    },
    reducers: {
      addNewEmptyNote: (state, action) => {
      
      },
      setActiveNote: (state, action) => {

      },
      setNotes: (state, action) => {  

      },
      setSaving: (state, action) => {
      },
      updateNote: (state, action) => {

      },
      deleteNoteById: (state, action) => {

      },
  }
});
export const { 
  increment,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById 
} = journalSlice.actions;