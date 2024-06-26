import { useEffect, useState } from "react";
// import PropTypes from "prop-types";

import {
  Card,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  CircularProgress,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import {
  LuSearch,
  LuMoreVertical,
  LuMapPin,
  LuBedDouble,
  LuShowerHead,
  LuRuler,
  LuTrash,
} from "react-icons/lu";
import { PiElevatorDuotone } from "react-icons/pi";

import perpertyImage from "../assets/property.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getProperties, removeProperty, showOnPublic } from "../reducers/property";

function ContentSection() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [protertyToDelete, setProtertyToDelete] = useState("");
  const [showPublic, setShowPublic] = useState("");

  //get from the redux
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.property.data);

  useEffect(() => {
    dispatch(getProperties());
  }, []);

  const _onDeletePropertyConfirmation = (propertyId) => {
    setProtertyToDelete(propertyId);
  };

  const _onDeleteProperty = () => {
    if (protertyToDelete) {
      dispatch(removeProperty({ property_id: protertyToDelete }))
        .then(() => {
          setLoading(false);
          setProtertyToDelete("");
        })
        .catch(() => {
          setLoading(false);
          setError(true);
          setProtertyToDelete("");
        });
    }
  };

  const _onShowPublic = (propertyId) => {
    setShowPublic(propertyId)
    console.log(showPublic);
    if (showPublic) {
      dispatch(showOnPublic({ property_id: showPublic, show: true }))
        .then(() => {
        setLoading(false);
        setShowPublic("");
      })
      .catch(() => {
      setLoading(false);
      setError(true);
      setShowPublic("");
    });
    } 
    
  };

  return (
    <div>
      <div className="flex flex-col flex-1 overflow-x-hidden">
        <div className="py-6">
          <div className="px-4 mx-auto sm:px-6 md:px-8">
            <div className="md:items-center md:flex">
              {/* <p className="text-base font-bold text-gray-900">Hey Mariana -</p>
              <p className="mt-1 text-base font-medium text-gray-500 md:mt-0 md:ml-2">
                {"here's what's happening with your store today"}
              </p> */}
            </div>
          </div>
          <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
            <div className="flex max-w-lg flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                size="lg"
                type="search"
                placeholder="Property Name"
                labelPlacement="outside"
                endContent={
                  <LuSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
            <div className="space-y-5 sm:space-y-5">
              <div className="grid gap-6 mt-12 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                {loading && <CircularProgress />}
                {error && (
                  <p className="text-danger">
                    Something went wrong. Please refresh the page.
                  </p>
                )}
                {properties.map((property) => (
                  <Card
                    key={property.id}
                    className="relative overflow-hidden bg-white rounded-lg shadow-lg group pb-4"
                  >
                    <div className="absolute z-10 top-5 left-2 flex flex-row gap-10 lg:gap-20">
                      <div className="inline-flex items-center justify-center text-xs font-bold text-gray-900 bg-secondary/80 rounded-full w-16 h-6 md:w-24 md:h-8">
                        {property.attributes.Post_types}
                      </div>
                    </div>
                    <div className="overflow-hidden aspect-w-4 aspect-h-3">
                      <img
                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                        src={perpertyImage}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="flex flex-col flex-1 mt-2 ml-4">
                        <div className="flex-1">
                          <div className="mt-2 sm:mt-0 flex justify-between items-center">
                            <p className="text-md font-semibold  text-primary uppercase">
                              {property.attributes.Price}
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
                                    onClick={() => _onShowPublic(property.id)}
                                  >
                                    Show on public
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
                                    Edit file
                                  </DropdownItem>
                                  <DropdownItem
                                    key="delete"
                                    className="text-danger"
                                    color="danger"
                                    startContent={<LuSearch />}
                                    onClick={() =>
                                      _onDeletePropertyConfirmation(property.id)
                                    }
                                  >
                                    Delete Property
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="text-lg font-medium leading-tight text-gray-900">
                            {property.attributes.Name}
                          </div>
                          <div className="mt-1 lg:mt">
                            <div className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                              <LuMapPin className="mr-2" />
                              {property.attributes.Address}
                            </div>
                          </div>
                          <div className="m-1 flex flex-row gap-3">
                            <div className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900">
                              <LuBedDouble className="mr-1  text-primary" />
                              {property.attributes.Bedroom}
                            </div>
                            <div className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900">
                              <LuShowerHead className="mr-1 text-primary" />
                              {property.attributes.Bathroom}
                            </div>
                            <div className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900">
                              <LuRuler className="mr-1 text-primary" />
                              {property.attributes.Size}
                            </div>
                            <div className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900">
                              <PiElevatorDuotone
                                size={20}
                                className="mr-1 text-primary"
                              />
                              {property.attributes.Floor}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={!!protertyToDelete}
        onClose={() => setProtertyToDelete("")}
        backdrop="blur"
      >
        <ModalContent>
          <ModalHeader>
            <span size="h4">
              Are you sure you want to remove this Property?
            </span>
          </ModalHeader>
          <ModalBody>
            <span>
              {
                "All the Proterty data will be removed and you won't be able to see it on your Dashboard anymore if you proceed with the removal."
              }
            </span>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="flat"
              color="primary"
              onClick={() => setProtertyToDelete("")}
              auto
            >
              Go back
            </Button>
            <Button
              color="danger"
              endContent={<LuTrash />}
              onClick={() => _onDeleteProperty()}
            >
              Remove completely
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

ContentSection.propTypes = {};

export default ContentSection;
