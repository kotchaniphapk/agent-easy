import React, { useEffect, useState } from "react";
import {
  Card,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
  AvatarGroup,
  Chip,
  CircularProgress,
} from "@nextui-org/react";
import {
  LuSearch,
  LuMoreVertical,
  LuMapPin,
  LuBedDouble,
  LuShowerHead,
  LuRuler,
} from "react-icons/lu";

import agentImage from "../assets/AgentNoey.jpg";
import { API_URL } from "../settings";

function ContentSection() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [properties, setProperties] = useState([]);
  const [newProperty, setNewProperty] = useState({});

  useEffect(() => {
    _getProperties();
  }, []);

  const _getProperties = async () => {
    const url = `${API_URL}/properties`;
    const method = "GET";
    const headers = new Headers({
      accept: "application/json",
    });

    setLoading(true);
    setError(false);

    const response = await fetch(url, { method, headers });
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    const propertyData = await response.json();
    console.log("properties", propertyData);
    if (propertyData?.data) {
      setProperties(propertyData.data);
    }
  };

  const _createProperty = async () => {
    const url = `${API_URL}/properties`;
    const method = "POST";
    const headers = new Headers({
      accept: "application/json",
      "content-type": "application/json",
    });
    const body = JSON.stringify({
      data: {
        Name: "Strapi test",
        Address: "Strapi address",
      },
    });

    setLoading(true);
    const response = await fetch(url, { method, headers, body });
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    _getProperties();
  };

  return (
    <div className="flex flex-col flex-1 overflow-x-hidden">
      <div className="py-6">
        <div className="px-4 mx-auto sm:px-6 md:px-8">
          <div className="md:items-center md:flex">
            <p className="text-base font-bold text-gray-900">Hey Mariana -</p>
            <p className="mt-1 text-base font-medium text-gray-500 md:mt-0 md:ml-2">
              here's what's happening with your store today
            </p>
          </div>
        </div>

        <Input
          onChange={(e) => setNewProperty({ ...newProperty, Name: e.target.value })}
        />

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
          <Button
            color="primary"
            onClick={_createProperty}
            isLoading={loading}
          >
            Create property
          </Button>
          <div className="space-y-5 sm:space-y-6">
            <div className="grid gap-6 mt-12 grid-cols-4">
              {loading && (
                <CircularProgress />
              )}
              {error && (
                <p className="text-danger">Something went wrong. Please refresh the page.</p>
              )}
              {properties.map((property) =>(
                <Card
                  key={property.id}
                  className="relative overflow-hidden bg-white rounded-lg shadow-lg group pb-4"
                >
                  <div className="absolute z-10 top-5 left-2 flex flex-row gap-20">
                    <div className="inline-flex items-center justify-center text-xs font-bold text-gray-900 bg-secondary rounded-full w-24 h-8">
                      FOR RENT
                    </div>
                    <div className="">
                      <AvatarGroup size="sm" isBordered max={1} total={3}>
                        <Avatar src={agentImage} />
                        <Avatar src={agentImage} />
                      </AvatarGroup>
                    </div>
                  </div>
                  <div className="overflow-hidden aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                      src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/9/product-1.png"
                      alt=""
                    />
                  </div>
                  <div className="px-2">
                    <div className="flex flex-col flex-1 mt-2 ml-4">
                      <div className="flex-1">
                        <div className="mt-2 sm:mt-0 flex justify-between items-center">
                          <p className="text-md font-semibold  text-primary uppercase">
                            20,000฿
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
                                >
                                  New file
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
                                >
                                  Delete file
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="text-lg font-medium leading-tight text-gray-900">
                          {property.attributes.Name}
                        </div>
                        <div className="mt-1 lg:mt-auto">
                          <div className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                            <LuMapPin className="mr-2" />
                            {property.attributes.Address}
                          </div>
                        </div>

                        <div className="m-1 flex flex-row gap-6">
                          <div className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900">
                            <LuBedDouble className="mr-1  text-primary" />2
                          </div>
                          <div className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900">
                            <LuShowerHead className="mr-1 text-primary" />2
                          </div>
                          <div className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900">
                            <LuRuler className="mr-1 text-primary" />
                            30 Sqm
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
  );
}

export default ContentSection;
