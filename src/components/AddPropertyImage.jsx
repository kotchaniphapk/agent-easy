import { LuImagePlus } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { nanoid } from "nanoid";

import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";

function AddPropertyImage({ onBack, onCreate, isLoading }) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            id: nanoid(12),
          })
        ),
      ]);
    }
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (id) => {
    setFiles((files) => files.filter((file) => file.id !== id));
  };

  return (
    <div className="pt-10 pl-40 pr-40 max-w-5xl">
      <div className="px-5 py-5  bg-white rounded-lg shadow-md overflow-hidden">
        <div className="">
          <div className="">
              <form className="flex flex-co bg-gray-100 px-20 py-20 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
                  <LuImagePlus size={40} />
                <div {...getRootProps()} >
                  <input {...getInputProps()} 
                  />
                  {isDragActive ? (
                    <p>Drop the first here</p>
                  ) : (
                    <p>
                      Drag and drop some file here,<span className="underline text-primary"> or click to select file</span></p>
                  )}
                </div>
              </form>
            </div>
        </div>
      </div>

      <div className="mt-10">
        <ul className="mt-6 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-10">
          {files.map((file) => (
            <li key={file.name} className="relative rounded-md shadow-lg">
              <img
                src={file.preview}
                width={400}
                height={200}
                className="h-full w-full object-cover rounded-md "
              />
              <Button
                isIconOnly
                variant="light"
                color="danger"
                className="flex items-center  justify-center absolute -top-6 -right-3"
                onClick={() => removeFile(file.id)}
              >
                <IoCloseCircle size="20" className="" />
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-40 flex justify-end gap-5">
        <Button color="primary" onClick={onBack}>
          Back
        </Button>
        <Button color="primary" onClick={onCreate} isLoading={isLoading}>
          Save
        </Button>
      </div>
    </div>
  );
}

AddPropertyImage.propTypes = {
  onBack: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default AddPropertyImage;
