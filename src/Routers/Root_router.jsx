import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDataContext } from "../Contexts/DataContext";
import PreventRoute from "./Private Route/PreventRoute";
import PrivateRoute from "./Private Route/PrivateRoute";
import LoginPage from "../Pages/LoginPage";
import HomePage from "./HomePage";
import RootPage from "./RootPage";

function Root_router() {
  const token = localStorage.getItem("accessToken");
  const [loadind, setLoadind] = useState(true);
  const { currentUser, setCurrentUser } = useDataContext();

  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<RootPage />}>
              <Route path="home" element={<HomePage />} />
            </Route>
          </Route>
          <Route path="/" element={<PreventRoute />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default Root_router;
