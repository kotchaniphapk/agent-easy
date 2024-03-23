import { useState } from "react";
import { Button } from "@nextui-org/react";
import {
  LuBuilding,
  LuHome,
  LuPlus,
  LuUser,
  LuUsers,
  LuSettings,
  LuAppWindow,
} from "react-icons/lu";
import { Link } from "react-router-dom";

const SideBar = () => {
  // const [addProperty, setAddProperty] = useState(false);

  return (
    <div className=" bg-slate-50">
        <div className="xl:w-64 xl:flex">
          <div className=" bg-gray-50 ">
            <div className="hidden md:flex md:w-64 md:flex-col h-screen fixed ">
              <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-t-gray-200">
                <div className="px-4">
                  <Link to="/addProperty">
                  <Button
                    color="primary"
                    variant="solid"
                    startContent={<LuPlus />}
                    className="w-full"
                    // onClick={() => setAddProperty(true)}
                  >
                    Add Property
                  </Button>
                  </Link>
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
                        <LuAppWindow size={20} className="flex-shrink-0 mr-4" />
                        Profile
                      </a>
                      <a
                        href="#"
                        title=""
                        className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200  hover:text-white rounded-lg hover:bg-primary group"
                      >
                        <LuHome size={20} className="flex-shrink-0 mr-4" />
                        Dashboard
                      </a>

                      <Link
                        to="/properties"
                        className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-primary group"
                      >
                        <LuBuilding size={20} className="flex-shrink-0 mr-4" />
                        Property
                      </Link>

                      <a
                        href="#"
                        className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-primary group"
                      >
                        <LuUser size={20} className="flex-shrink-0 mr-4" />
                        Agents
                      </a>

                      <a
                        href="#"
                        className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-primary group"
                      >
                        <LuUsers size={20} className="flex-shrink-0 mr-4" />
                        Customers
                      </a>
                    </nav>

                    <hr className="border-gray-200" />

                    <nav className="flex-1 space-y-2">
                      <a
                        href="#"
                        className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-primary group"
                      >
                        <LuSettings size={20} className="flex-shrink-0 mr-4" />
                        Settings
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <PropertyFormSection isOpen={addProperty} onClose={() => setAddProperty(false)} /> */}
      </div>
  );
};
export default SideBar;
