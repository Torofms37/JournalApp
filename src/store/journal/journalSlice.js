import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
      isSaving: false,
      messageSaved: '',
      notes: [],
      // active: null,
      // active: {

      // }

    },
    reducers: {
      savingNewNote: (state) => {
        state.isSaving = true;
      },
      addNewEmptyNote: (state, action) => {
        state.notes.push(action.payload);
        state.isSaving = false;
      },
      setActiveNote: (state, action) => {
        state.active = action.payload;
        state.messageSaved = action.payload;
      },
      setNotes: (state, action) => { 
        state.notes = action.payload;
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
  addNewEmptyNote,
  deleteNoteById,
  increment,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;