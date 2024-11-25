import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usePropertyContext } from "../context/PropertyContext";

const CreateProperty = () => {
  const [imageName, setImageName] = useState(""); // For storing image name
  const { allProperties, setAllProperties } = usePropertyContext();
  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageName = file.name; // Get the name of the image
      setImageName(imageName);

      // Here you can implement an upload logic (for instance via an API)
      // For now, just log the name of the image
      console.log("Selected Image:", imageName);

      // Save the image to public directory or handle upload logic here
    }
  };
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addNewProperty = (newProperty) => {
    setAllProperties((prevProperties) => {
      const updatedProperties = [...prevProperties, newProperty];
      localStorage.setItem("allProperties", JSON.stringify(updatedProperties));
      window.dispatchEvent(new Event("allProperties"));
      return updatedProperties;
    });
  };
  // Submit handler function
  const onSubmit = (data) => {
    // The data object will contain the form values
    const finalData = {
      ...data,
      id: allProperties.length + 1,
      // image: `/${imageName}`,
    }; // Image saved under public/img/
    console.log("Final Data with Image:", finalData);
    addNewProperty(finalData);
  };
  return (
    <div>
      <h2 className="font-bold text-prgreen text-4xl heading text-center py-4">
        Create New Property
      </h2>
      <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
            <div className="shrink-0 mr-auto sm:py-3">
              <p className="font-medium">Property Details</p>
              <p className="text-sm text-gray-600">
                Create a property with details
              </p>
            </div>
          </div>

          {/* Property Name */}
          <div className="flex flex-col gap-4 border-b py-4 ">
            <p className="shrink-0 w-32 font-medium">Property Name</p>
            <input
              {...register("name", { required: "Property name is required" })}
              placeholder="property name..."
              className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-prgreen sm:mr-4 sm:mb-0 focus:ring-1"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Property Address */}
          <div className="flex flex-col gap-4 border-b py-4 ">
            <p className="shrink-0 w-32 font-medium">Property Address</p>
            <input
              {...register("address", { required: "Address is required" })}
              placeholder="property address..."
              className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-prgreen sm:mr-4 sm:mb-0 focus:ring-1"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          {/* Property Type */}
          <div className="flex flex-col gap-4 border-b py-4 ">
            <p className="shrink-0 w-32 font-medium">Property Types</p>
            <select
              {...register("type", { required: "Property type is required" })}
              className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-prgreen sm:mr-4 sm:mb-0 focus:ring-1"
            >
              <option value="">Select Property Type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Commercial">Commercial</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm">{errors.type.message}</p>
            )}
          </div>

          {/* Property Status */}
          <div className="flex flex-col gap-4 border-b py-4 ">
            <p className="shrink-0 w-32 font-medium">Property Status</p>
            <select
              {...register("status", {
                required: "Property status is required",
              })}
              className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-prgreen sm:mr-4 sm:mb-0 focus:ring-1"
            >
              <option value="">Select Property Status</option>
              <option value="Available">Available</option>
              <option value="Rented">Rented</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status.message}</p>
            )}
          </div>

          {/* Property Details */}
          <div className="flex flex-col gap-4 border-b py-4 ">
            <p className="shrink-0 w-32 font-medium">Property Details</p>
            <div className="flex justify-between items-start gap-2">
              <div>
                <input
                  type="number"
                  {...register("bedrooms", {
                    required: "Number of bedrooms is required",
                  })}
                  className="flex-1 mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-prgreen sm:mr-4 sm:mb-0 focus:ring-1"
                  placeholder="bedrooms..."
                />
                {errors.bedrooms && (
                  <p className="text-red-500 text-sm">
                    {errors.bedrooms.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  {...register("bathrooms", {
                    required: "Number of bathrooms is required",
                  })}
                  className="flex-1 mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-prgreen sm:mr-4 sm:mb-0 focus:ring-1"
                  placeholder="bathrooms..."
                />
                {errors.bathrooms && (
                  <p className="text-red-500 text-sm">
                    {errors.bathrooms.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  {...register("area", { required: "Area is required" })}
                  className="flex-1 mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-prgreen sm:mr-4 sm:mb-0 focus:ring-1"
                  placeholder="area..."
                />
                {errors.area && (
                  <p className="text-red-500 text-sm">{errors.area.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Check In/Out */}
          <div className="flex flex-col gap-4 border-b py-4 ">
            <p className="shrink-0 w-32 font-medium">Check In/Out</p>
            <div className="flex justify-between items-start gap-2 w-full">
              <div className="flex-1">
                <input
                  type="number"
                  {...register("checkIns", {
                    required: "Check-in number is required",
                  })}
                  className=" mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-prgreen sm:mr-4 sm:mb-0 focus:ring-1"
                  placeholder="checkIns..."
                />
                {errors.checkIns && (
                  <p className="text-red-500 text-sm">
                    {errors.checkIns.message}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  {...register("checkOuts", {
                    required: "Check-out number is required",
                  })}
                  className=" mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-prgreen sm:mr-4 sm:mb-0 focus:ring-1"
                  placeholder="checkOuts..."
                />
                {errors.checkOuts && (
                  <p className="text-red-500 text-sm">
                    {errors.checkOuts.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Property Price */}
          <div className="flex flex-col gap-4 border-b py-4 ">
            <p className="shrink-0 w-32 font-medium">Property Price</p>
            <input
              type="number"
              {...register("price", { required: "Price is required" })}
              className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-prgreen sm:mr-4 sm:mb-0 focus:ring-1"
              placeholder="Price..."
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          {/* Avatar */}
          <div className="flex flex-col gap-4 py-4 lg:flex-row">
            <div className="shrink-0 w-32 sm:py-4">
              <p className="mb-auto font-medium">Avatar</p>
              <p className="text-sm text-gray-600">Change your avatar</p>
            </div>
            <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
              <img
                src="/OIP.jfif"
                className="h-16 w-16 rounded-full"
                alt="Avatar"
              />
              <p className="text-sm text-gray-600">
                Drop your desired image file here to start the upload
              </p>
              <input
                type="file"
                {...register("image")}
                // onChange={handleImageChange}
                className="max-w-full rounded-lg px-2 font-medium text-prgreen outline-none ring-prgreen focus:ring-1"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end py-4">
            <button
              type="button"
              className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg border-2 border-transparent bg-prgreen px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProperty;
