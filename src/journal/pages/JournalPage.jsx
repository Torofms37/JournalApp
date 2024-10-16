import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../../views";

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
    </JournalLayout>
  );
};
