import { useDispatch } from "react-redux";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../../views";
import { NoteView } from "../../views/NoteView";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote, setNotes, startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const { isSaving, active, notes, messageSaved } = useSelector(
    (state) => state.journal
  );
  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {!!active ? <NoteView /> : <NothingSelectedView />}
      <IconButton
        onClick={onClickNewNote}
        size="large"
        disabled={isSaving}
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", Opacity: 0.5 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
