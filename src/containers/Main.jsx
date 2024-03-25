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
            <Route path="/dashboard" element={<div>This is Dashboard report and over view</div>} />
            <Route path="/addProperty" element={<PropertyFormSection />} />
            <Route path="/profile" element={<div>This is public Profile</div>} />
            <Route path="/agent-teams" element={<div>this is Agent team page</div>} />
            <Route path="/customers" element={<div>this is customers page,ower and rental customer</div>} />
            <Route path="/community" element={<div>this is community feed</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Main;
