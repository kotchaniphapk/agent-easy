import { Route, Routes } from "react-router-dom";

import NavbarMain from "../components/NavbarMain";
import SideBar from "../components/SideBar";
import ContentSection from "../components/ContentSection";
import PropertyFormSection from "../components/PropertyFormSection";


function Main() {
  return (
    <div>
      <NavbarMain />
      <div className="flex flex-1">
        <SideBar />
        <div className="w-full">
          <Routes>
            <Route path="/properties" element={<ContentSection />} />
            <Route path="/dashboard" element={<div>hey</div>} />
            <Route path="/addProperty" element={<PropertyFormSection />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Main;
