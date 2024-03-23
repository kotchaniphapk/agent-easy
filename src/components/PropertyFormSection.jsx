import { useState } from "react";
import { LuBuilding, LuImagePlus } from "react-icons/lu";
import {
  Button,
  Input,
  CircularProgress,
  CardHeader,
  CardBody,
  CardFooter,
  Card
} from "@nextui-org/react";
import PropTypes from "prop-types";

// import { API_URL } from "../settings";

import { createProperties } from "../reducers/property";
import { useDispatch} from "react-redux";

const types = ["For rent", "For sell", "Sell contract", "Leasehold"];

function PropertyFormSection({ isOpen, onClose }) {
  const [postType, setPostType] = useState(types[0]);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [size, setSize] = useState();
  const [yourStatus, setYourStatus] = useState("owner");
  const [bedRoom, setBedRoom] = useState();
  const [bathRoom, setBathRoom] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const onCreateProperties = () => {
      setLoading(true);
    dispatch(createProperties({ name, address, size, postType, bedRoom ,bathRoom , yourStatus }))
      .then((data) => {
        if (!data.error) {
          onClose();
          setError(true);
          return;
        }

        console.log(data);
      });
  }

 
  return (
    <>
      {loading && <CircularProgress />}
      {error && (
        <p className="text-danger">
          Something went wrong. Please refresh the page.
        </p>
      )}
      <div size="4xl">
        <Card>
          <CardHeader className="flex flex-col ">
            <div className="flex flex-row gap-1 items-center">
              <LuBuilding size={20} className="text-primary" />
              <h3 className="text-2xl font-medium  text-gray-900">
                Property Details
              </h3>
            </div>
          </CardHeader>
          <CardBody>
            <div>
              <p>Your status</p>
              <div className="flex flex-row gap-4 mt-2">
                <Button
                  color={yourStatus === "owner" ? "primary" : "default"}
                  variant={yourStatus === "owner" ? "solid" : "flat"}
                  className="w-full"
                  onClick={() => setYourStatus("owner")}
                >
                  Owner
                </Button>
                <Button
                  color={yourStatus !== "agent" ? "default" : "primary"}
                  variant={yourStatus === "agent" ? "solid" : "flat"}
                  className="w-full"
                  onClick={() => setYourStatus("agent")}
                >
                  Agent
                </Button>
              </div>
            </div>
            <div>
              <p>Post types</p>
              <div className="flex flex-row gap-4 mt-2">
                {types.map((type) => (
                  <Button
                    key={type}
                    color={postType !== type ? "default" : "primary"}
                    variant={postType === type ? "solid" : "flat"}
                    onClick={() => setPostType(type)}
                    className="w-full"
                  >
                    {type}
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
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className=" w-full">
                <p>Address</p>
                <Input
                  type="text"
                  placeholder="zone"
                  className="mt-2"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className=" w-full">
                <p>Size</p>
                <Input
                  type="text"
                  placeholder="Size of your room/Sqm"
                  className="mt-2"
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-row  gap-4">
              <div className="w-full">
                <p>Bedroom</p>
                <div className="mt-2">
                  <Input
                    type="number"
                    placeholder="Enter your bedroom"
                    className="mt-2"
                    onChange={(e) => setBedRoom(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full">
                <p>Bathroom</p>
                <div className="mt-2">
                  <Input
                    type="number"
                    placeholder="Enter your bedroom"
                    className="mt-2"
                    onChange={(e) => setBathRoom(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 flex w-full flex-wrap md:flex-nowrap gap-2">
              <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-4 py-6">
                  <div
                    id="image-preview"
                    className="max-w-sm p-6  bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
                  >
                    <input
                      id="upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                    />
                    <label htmlFor="upload" className="cursor-pointer">
                      <div className="flex justify-center">
                        <LuImagePlus size="50" />
                      </div>
                      <div className="mt-2">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                          Upload picture
                        </h5>
                        <p className="font-normal text-sm text-gray-400 md:px-6">
                          Choose photo size should be less than{" "}
                          <b className="text-gray-600">2mb</b>
                        </p>
                        <p className="font-normal text-sm text-gray-400 md:px-6">
                          and should be in{" "}
                          <b className="text-gray-600">JPG, PNG, or GIF</b>{" "}
                          format.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              
            </div>
          </CardBody>
          <CardFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button
              color="primary"
              onClick={onCreateProperties}
              isLoading={loading}
            >
              Save
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

PropertyFormSection.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PropertyFormSection;


