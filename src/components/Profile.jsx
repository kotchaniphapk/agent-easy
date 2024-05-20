import {
  Button,
  Card,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import {
  LuBedDouble,
  LuCamera,
  LuEye,
  LuMapPin,
  LuMoreVertical,
  LuRuler,
  LuSearch,
  LuShowerHead,
} from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { PiElevatorDuotone } from "react-icons/pi";
// import ContentSection from "./ContentSection";
import perpertyImage from "../assets/property.jpeg";
import { useEffect, useState } from "react";
import { getProperties,showOnPublic } from "../reducers/property";
import { Link } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const [deleteOnPublic, setDeleteOnPublic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const publicProperties = useSelector((state) =>
    state.property.data.filter((p) => p.attributes.Public)
  );
  
  useEffect(() => {
    dispatch(getProperties());
  }, []);
  



  const _onDeleteShowPublic = (propertyId) => {
    setDeleteOnPublic(propertyId)
    console.log(deleteOnPublic);
    if (deleteOnPublic) {
      dispatch(showOnPublic({ property_id: deleteOnPublic, show: false }))
        .then(() => {
        setLoading(false);
        setDeleteOnPublic("");
      })
      .catch(() => {
      setLoading(false);
      setError(true);
      setDeleteOnPublic("");
    });
    } 
    
  };


  return (
    <div>
      <div className="bg-slate-100 h-80"></div>
      <div className="flex justify-end">
        <Button
          variant="bordered"
          color="primary"
          startContent={<LuCamera size={24} />}
          className="-left-5 -top-14"
        >
          {"Edit cover"}
        </Button>
      </div>
      <div className="">
        <div className="px-10">
          <div className="w-48 h-48 bg-gray-200 rounded-full -translate-y-40 border-5 border-white absolute">
            <Button
              isIconOnly
              variant="solid"
              color="default"
              radius="full"
              className="flex items-center  justify-center absolute top-2/3 right-1"
            >
              <LuCamera size="20" className="" />
            </Button>
          </div>
          {/* <img className="object-cover w-56 h-56 top-10" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-author/2/author-2.png" alt=""/> */}
        </div>
        <div className="ml-10 md:ml-60 pt-10 md:pt-0 md:mt-0">
          <span className="font-bold text-2xl">Kotchanipha IlIn</span>
        </div>
        <div className="flex flex-col-2 gap-4 jutify-start ml-10 md:justify-end md:pr-10 mt-5">
          <Button
            size="md"
            variant="solid"
            color="primary"
            startContent={<AiOutlineMessage size={24} />}
          >
            Message
          </Button>
          <Button
            variant="solid"
            color="primary"
            startContent={<LuEye size={24} />}
          >
            Preview
          </Button>
        </div>
      </div>
      <div className="px-20 mt-10">
        <Divider />
      </div>
      <div className="mt-10 px-4 mx-auto sm:px-6 lg:px-10 mb-10  max-w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {publicProperties.map((property) => (
          <>
            {/* <Link to={`/property/${property.id}`}> */}
              <Card
                isHoverable
                key={property.id}
                className= "bg-white md:p-8 lg:px-6 lg:py-6 cursor-pointer"
                
              >
                <div className="">
                  <div className="lg:col-span-2 md:order-1">
                    <div className="absolute z-10 top-5 left-2 flex flex-row gap-10 lg:gap-10">
                      <div className="inline-flex items-center justify-center sm:text-sm text-md font-bold text-gray-900 bg-secondary/90 rounded-full w-20 h-8 md:w-24 md:h-10">
                        {property.attributes.Post_types}
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <img
                          className="object-cover w-full h-full"
                          src={perpertyImage}
                          alt=""
                        />
                      </div>
                    
                    </div>
                  </div>
                  <div className="flex flex-col justify-between px-6 pb-4 md:pb-0 md:px-0 md:order-2 lg:col-span-3">
                    <div className="">
                      <div className="flex flex-col flex-1 mt-2 ml-4">
                        <div className="flex-1">
                          <div className=" sm:mt-0 flex justify-between items-center">
                            <p className="text-xl font-semibold  text-primary uppercase">
                              {property.attributes.Price}{" "}
                              <span className="">฿</span>
                            </p>
                            <div>
                              <Dropdown>
                                <DropdownTrigger>
                                  <Button isIconOnly variant="light">
                                    <LuMoreVertical />
                                  </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                  variant="faded"
                                  aria-label="Dropdown menu with icons"
                                >
                                  <DropdownItem
                                    key="new"
                                    startContent={<LuSearch />}
                                    onSelect={() => _onDeleteShowPublic(property.id)}
                                  >
                                    Delete on public
                                  </DropdownItem>
                                  <DropdownItem
                                    key="copy"
                                    startContent={<LuSearch />}
                                  >
                                    Copy link
                                  </DropdownItem>
                                  <DropdownItem
                                    key="edit"
                                    startContent={<LuSearch />}
                                  >
                                    Edit Property
                                  </DropdownItem>
                                  <DropdownItem
                                    key="delete"
                                    className="text-danger"
                                    color="danger"
                                    startContent={<LuSearch />}
                                  >
                                    Delete Property
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="mt-2 text-2xl font-medium leading-tight text-gray-900">
                            {property.attributes.Name}
                          </div>
                          <div className="mt-1 lg:mt">
                            <div className="flex items-center text-md font-medium text-gray-600 hover:text-gray-900">
                              <LuMapPin className="mr-2" />
                              {property.attributes.Address}
                            </div>
                          </div>
                          <p className="mt-5">
                            {" "}
                            คอนโดเชียงใหม่ ดีเวียงคอนโด สันติธรรม 2 ห้องนอน ราคาถูกกว่าตลาด ในราคาไม่เกิน 4 ล้านบาท
                          </p>
                          <div className="mt-5 m-1 flex flex-row gap-6">
                            <div className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900">
                              <LuBedDouble size={30} className="mr-1  text-primary" />
                              {property.attributes.Bedroom}
                            </div>
                            <div className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900">
                              <LuShowerHead size={30} className="mr-1 text-primary" />
                              {property.attributes.Bathroom}
                            </div>
                            <div className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900">
                              <LuRuler size={30} className="mr-1 text-primary" />
                              {property.attributes.Size}
                            </div>
                            <div className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900">
                              <PiElevatorDuotone
                                size={30}
                                className="mr-1 text-primary"
                              />
                              {property.attributes.Floor}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            {/* </Link> */}
          </>
        ))}
        </div>
    </div>
  );
}

Profile.propTypes = {};

export default Profile;
