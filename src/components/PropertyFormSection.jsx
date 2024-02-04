import React, { useState } from "react";
import { LuBuilding, LuImagePlus } from "react-icons/lu";
import { Bedrooms } from "../data";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Tabs,
  Tab,
  Select,
  SelectItem,
  Spacer,
} from "@nextui-org/react";

const types = ["For rent", "For sell", "Sell contract", "LeaseHold"];

function PropertyFormSection({ isOpen, onClose }) {
  const [active, setActive] = useState("owner");
  const [postType, setPostType] = useState(types);

  return (
    <>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col ">
                <div className="flex flex-row gap-1 items-center">
                  <LuBuilding size={20} className="text-primary" />
                  <h3 className="text-2xl font-medium  text-gray-900">
                    Property Details
                  </h3>
                </div>
              </ModalHeader>
              <ModalBody>
                <div>
                  <p>Your status</p>
                  <div className="flex flex-row gap-4 mt-2">
                    <Button
                      color={active === "owner" ? "primary" : "default"}
                      variant={active === "owner" ? "solid" : "flat"}
                      className="w-full"
                      onClick={() => setActive("owner")}
                    >
                      Owner
                    </Button>
                    <Button
                      color={active !== "agent" ? "default" : "primary"}
                      variant={active === "agent" ? "solid" : "flat"}
                      className="w-full"
                      onClick={() => setActive("agent")}
                    >
                      Agent
                    </Button>
                  </div>
                </div>
                <div>
                  <p>Post types</p>
                  <div className="flex flex-row gap-4 mt-2">
                    {types.map((types) => (
                      <Button
                        color={postType !== types ? "default" : "primary"}
                        variant={postType === types ? "solid" : "flat"}
                        onClick={() => setPostType(types)}
                        className="w-full"
                      >
                        {types}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="mt-2 flex flex-row  gap-4">
                  <div className="w-full">
                    <p>Project name</p>
                    <Input
                      type="text"
                      placeholder="Type your Project name"
                      className="mt-2"
                    />
                  </div>
                  <div className=" w-full">
                    <p>Zone</p>
                    <Input type="text" placeholder="zone" className="mt-2" />
                  </div>
                </div>
                <div className="mt-2 flex flex-row  gap-4">
                  <div className="w-full">
                    <p>Project name</p>
                    <div className="mt-2 flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                      <Select
                        size="md"
                        label="Select an Bedrooms"
                        className="max-w-xs"
                      >
                        {Bedrooms.map((Bedrooms) => (
                          <SelectItem key={Bedrooms.value} value={Bedrooms.value}>
                            {Bedrooms.label}
                          </SelectItem>
                        ))}
                      </Select>
                      {/* <Select
                        size="md"
                        label="Favorite Animal"
                        placeholder="Select an animal"
                        className="max-w-xs"
                      >
                        {animals.map((animal) => (
                          <SelectItem key={animal.value} value={animal.value}>
                            {animal.label}
                          </SelectItem>
                        ))}
                      </Select> */}
                    </div>
                  </div>
                </div>

                {/* <div className="mt-2 flex w-full flex-wrap md:flex-nowrap gap-2">
                  <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="px-4 py-6">
                      <div
                        id="image-preview"
                        class="max-w-sm p-6  bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
                      >
                        <input
                          id="upload"
                          type="file"
                          class="hidden"
                          accept="image/*"
                        />
                        <label for="upload" class="cursor-pointer">
                          <div className="flex justify-center">
                            <LuImagePlus size="50" />
                          </div>
                          <div className="mt-2">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">
                              Upload picture
                            </h5>
                            <p class="font-normal text-sm text-gray-400 md:px-6">
                              Choose photo size should be less than{" "}
                              <b class="text-gray-600">2mb</b>
                            </p>
                            <p class="font-normal text-sm text-gray-400 md:px-6">
                              and should be in{" "}
                              <b class="text-gray-600">JPG, PNG, or GIF</b>{" "}
                              format.
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="px-4 py-6">
                      <div
                        id="image-preview"
                        class="max-w-sm p-6  bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
                      >
                        <input
                          id="upload"
                          type="file"
                          class="hidden"
                          accept="image/*"
                        />
                        <label for="upload" class="cursor-pointer">
                          <div className="flex justify-center">
                            <LuImagePlus size="50" />
                          </div>
                          <div className="mt-2">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">
                              Upload picture
                            </h5>
                            <p class="font-normal text-sm text-gray-400 md:px-6">
                              Choose photo size should be less than{" "}
                              <b class="text-gray-600">2mb</b>
                            </p>
                            <p class="font-normal text-sm text-gray-400 md:px-6">
                              and should be in{" "}
                              <b class="text-gray-600">JPG, PNG, or GIF</b>{" "}
                              format.
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div> */}
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default PropertyFormSection;
