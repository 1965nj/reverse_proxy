import React from "react";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Setting from "./pages/Setting.jsx";
import About from "./pages/About.jsx";
import Facture from "./pages/Facture.jsx";
import { BrowserRouter,Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashbaord" element={<Dashboard />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="facture" element={<Facture />} />
            <Route path="setting" element={<Setting />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>

    </div>
  );
}
export default App;
