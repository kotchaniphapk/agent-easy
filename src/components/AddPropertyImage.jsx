import { LuImagePlus } from "react-icons/lu";
import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";


const AddPropertyImage = ({onBack}) => {

  return (
    <div>
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
          <Button color="primary" 
          onClick={onBack}>
          Back
          </Button>
    </div>
  )
}

AddPropertyImage.propTypes = {
  onBack: PropTypes.func.isRequired,
 
};

export default AddPropertyImage
