import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { LuBuilding, LuHome, LuPlus, LuUser, LuUsers, LuSettings} from "react-icons/lu";

const SideBar = () => {
  return (
    <div className="flex flex-1 bg-gray-50">
      <div className="hidden md:flex md:w-64 md:flex-col h-screen">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white">
          <div className="px-4">
            <Button
              color="primary"
              variant="solid"
              startContent={<LuPlus />}
              className="w-full"
            >
              Add Property
            </Button>
          </div>

          <div className="px-4 mt-6">
            <hr className="border-gray-200" />
          </div>

          <div className="flex flex-col flex-1 px-3 mt-6">
            <div className="space-y-4">
              <nav className="flex-1 space-y-2">
                <a
                  href="#"
                  title=""
                  className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200  hover:text-white rounded-lg hover:bg-primary group"
                >
                  <LuHome size={20} className="flex-shrink-0 mr-4" />
                  Dashboard
                </a>

                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-primary group"
                >
                  <LuBuilding size={20} className="flex-shrink-0 mr-4" />
                  Property
                </a>

                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-primary group"
                >
                  <LuUser size={20} className="flex-shrink-0 mr-4"/>
                  Agents
                </a>

                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-primary group"
                >
                 <LuUsers size={20} className="flex-shrink-0 mr-4"/>
                  Customers
                </a>
              </nav>

              <hr className="border-gray-200" />

              <nav className="flex-1 space-y-2">
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-primary group"
                >
                  <LuSettings size={20} className="flex-shrink-0 mr-4"/>
                  Settings
                </a>
              </nav>
            </div>

            <div className="pb-4 mt-20">
              {/* <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100"
              >
                <img
                  className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png"
                  alt=""
                />
                Jacob Jones
                <svg
                  className="w-5 h-5 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
