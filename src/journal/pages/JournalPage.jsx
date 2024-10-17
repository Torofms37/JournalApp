import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../../views";
import { NoteView } from "../../views/NoteView";
import { IconButton } from "@mui/material";
import { AddOutlined, Opacity } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        distinctio possimus vitae numquam consectetur praesentium facere enim ab
        saepe quidem? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Voluptatibus, recusandae... aa
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
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
