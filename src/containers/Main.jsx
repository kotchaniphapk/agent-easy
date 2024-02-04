import NavbarMain from "../components/NavbarMain";
import SideBar from "../components/SideBar";
import ContentSection from "../components/ContentSection";
import PropertyFormSection from "../components/PropertyFormSection";
import React from "react";

function Main() {
  return (
    <div>
      <NavbarMain />
      <div className="flex flex-1">
        <SideBar />
        <div className="">
        <ContentSection />
        </div>
      </div>
    </div>
  );
}

export default Main;
