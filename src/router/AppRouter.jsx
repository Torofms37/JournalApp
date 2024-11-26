import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

import { JournalRoutes } from "../journal/router/JournalRoutes";
import { CheckingAuth } from "../ui";

import { useCheckAuth } from "../hook";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />

      {/* Login y register: sirve para decirle que si no tiene accceso a journalapp
      <Route path="/auth/*" element={<AuthRoutes />} />.
      
      JournalApp: en caso que no sea login o register se vaya aqui
      <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  );
};
