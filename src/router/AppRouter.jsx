import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/router/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y register: sirve para decirle que si no tiene accceso a journalapp */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/* JournalApp: en caso que no sea login o register se vaya aqui*/}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
