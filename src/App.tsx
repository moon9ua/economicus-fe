import { styled } from "@mui/system";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PersonalProfilePage from "./pages/PersonalProfilePage";
import QuantLabPage from "./pages/QuantLabPage";
import QuantModelDetailsPage from "./pages/QuantModelDetailsPage";
import QuantModelListPage from "./pages/QuantModelListPage";
import SettingsPage from "./pages/SettingsPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <StyledDiv>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/PersonalProfilePage"
              element={<PersonalProfilePage />}
            />
            <Route
              path="/QuantModelDetailsPage/:id"
              element={<QuantModelDetailsPage />}
            />
            <Route
              path="/QuantModelListPage"
              element={<QuantModelListPage />}
            />
            <Route path="/QuantLabPage" element={<QuantLabPage />} />
            <Route path="/SettingsPage" element={<SettingsPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
          </Routes>
          {/* TODO: path 끝에 Page 삭제하고 동적 라우팅 추가해야함 */}
        </Layout>
      </BrowserRouter>
    </StyledDiv>
  );
}

const StyledDiv = styled("div")`
  /* font-family: "SongMyung"; */
`;

export default App;
