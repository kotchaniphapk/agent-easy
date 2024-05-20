import { useState } from "react";
import { LuBuilding } from "react-icons/lu";
import { Button, Input, CircularProgress } from "@nextui-org/react";

import { createProperties } from "../reducers/property";
import { useDispatch } from "react-redux";
import AddPropertyImage from "./AddPropertyImage";
import { useNavigate } from "react-router-dom";
// import StepAddProperty from "./StepAddProperty";

const types = ["For rent", "For sell", "Sell contract", "Leasehold"];

function PropertyFormSection() {
  const [postType, setPostType] = useState(types[0]);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [size, setSize] = useState();
  const [yourStatus, setYourStatus] = useState("owner");
  const [bedRoom, setBedRoom] = useState();
  const [bathRoom, setBathRoom] = useState();
  const [price, setPrice] = useState();
  const [floor, setFloor] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [addPropertyScreen, setAddPropertyScreen] = useState("PropertyDetails");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreateProperties = () => {
    setLoading(true);
    dispatch(
      createProperties({
        name,
        address,
        size,
        postType,
        bedRoom,
        bathRoom,
        yourStatus,
        price,
        floor,
      })
    ).then((data) => {
        setLoading(false)
      if (data.error) {
        setError(true);
        return;
      }

      navigate("/properties");

      console.log(data);
    });
  };

  const goNextDetail = () => {
    setAddPropertyScreen("nextDetailScreen");
  };

  const goBackDetail = () => {
    setAddPropertyScreen("PropertyDetails");
  };

  return (
    <>
      {loading && <CircularProgress />}
      {error && (
        <p className="text-danger">
          Something went wrong. Please refresh the page.
        </p>
      )}
      {addPropertyScreen === "PropertyDetails" && (
        <>
          <div className="p-5">
            {/* <StepAddProperty /> */}
            <div className="pt-10 pl-40 pr-40 max-w-5xl">
              <div className="flex flex-col ">
                <div className="flex flex-row gap-1 items-center">
                  <LuBuilding size={20} className="text-primary" />
                  <h3 className="text-2xl font-medium  text-gray-900">
                    Property Details
                  </h3>
                </div>
              </div>
              <div>
                <div className="mt-2">
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
                <div className="mt-2">
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
                      size="sm"
                      type="text"
                      placeholder="Type your Project name"
                      className="mt-2"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className=" w-full">
                    <p>Size</p>
                    <Input
                      size="sm"
                      type="text"
                      placeholder="Size of your room/Sqm"
                      className="mt-2"
                      onChange={(e) => setSize(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-2 w-full">
                    <p>Address</p>
                    <Input
                      size="sm"
                      type="text"
                      placeholder="zone"
                      className="mt-2"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                <div className="mt-2 flex flex-row  gap-4">
                  <div className="w-full">
                    <p>Bedroom</p>
                    <div className="mt-2">
                      <Input
                        size="sm"
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
                        size="sm"
                        type="number"
                        placeholder="Enter your bedroom"
                        className="mt-2"
                        onChange={(e) => setBathRoom(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex flex-row  gap-4">
                  <div className="w-full">
                    <p>Floor</p>
                    <div className="mt-2">
                      <Input
                        size="sm"
                        type="number"
                        placeholder="Enter your bedroom"
                        className="mt-2"
                        onChange={(e) => setFloor(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <p>Price</p>
                    <div className="mt-2">
                      <Input
                        size="sm"
                        type="number"
                        placeholder="Enter your bedroom"
                        className="mt-2"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="mt-5 flex justify-end space-x-2">
                <Button color="primary" onClick={goNextDetail}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      {addPropertyScreen === "nextDetailScreen" && (
        <>
          <AddPropertyImage onBack={goBackDetail} 
          onCreate={onCreateProperties}
          isLoading={loading}
          />
        </>
      )}
    </>
  );
}

PropertyFormSection.propTypes = {
};

export default PropertyFormSection;
