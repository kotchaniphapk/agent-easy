import { Route, Routes, useParams } from "react-router-dom";

import NavbarMain from "../components/NavbarMain";
import SideBar from "../components/SideBar";
import ContentSection from "../components/ContentSection";
import PropertyFormSection from "../components/PropertyFormSection";
import Profile from "../components/Profile";

function Main() {
  const params = useParams();

  console.log(params.property_id);

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
            <Route path="/profile" element={<Profile/>} />
            <Route path="/agent-teams" element={<div>this is Agent team page</div>} />
            <Route path="/customers" element={<div>this is customers page,ower and rental customer</div>} />
            <Route path="/community" element={<div>this is community feed</div>} />
            <Route path="/property/:property_id" element={<div>this is community feed</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Main;