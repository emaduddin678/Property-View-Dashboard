import React from "react";

const PropertyCard = ({ properties }) => {
  return (
    <div className="px-10 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
      {properties.map((property) => (
        <div
          key={property.id}
          className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl"
        >
          {console.log(property)}
          <img
            className="w-full h-60"
            src={
              property.image instanceof File
                ? URL.createObjectURL(property.image)
                : property.image
            }
            alt={property.name}
          />
          <div className="px-6 py-4">
            <div className="mb-2">
              <h2 className="text-xl font-bold text-gray-900">
                {property.name}
              </h2>
              <h6 className="mb-2">
                <span className="text-black-50 text-xs">
                  {property.address}
                </span>
              </h6>
              <div className="flex items-center justify-between">
                <div className="mr-2 rounded-sm bg-blue-600 py-1 px-2 text-xs font-medium text-white">
                  {property.type}
                </div>
                <div className="rounded-sm bg-yellow-500 py-1 px-2 text-xs font-medium text-white">
                  {property.status}
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div className="flex items-center flex-col justify-start">
                <img
                  className="size-5"
                  src="https://img.icons8.com/windows/24/null/bedroom.png"
                />
                <p className="ml-2 text-xs font-medium text-prgreen2">
                  {property.bedrooms} Bedrooms
                </p>
              </div>
              <div className="flex items-center flex-col justify-start">
                <img
                  className="size-5"
                  src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png"
                />
                <p className="ml-2 text-xs font-medium text-prgreen2">
                  {property.bathrooms} Bathrooms
                </p>
              </div>
              <div className="flex items-center flex-col justify-start">
                <img
                  className="size-5"
                  src="https://img.icons8.com/ios-glyphs/24/null/expand--v1.png"
                />
                <p className="ml-2 text-xs font-medium text-prgreen2">
                  {property.area} sqm
                </p>
              </div>
            </div>

            {/* Check-in and Checkout Info */}
            <div className="mt-4 flex justify-between text-sm text-green-800">
              <div>
                <span className="font-medium mr-1">Check-ins:</span>
                <span>{property.checkIns}</span>
              </div>
              <div>
                <span className="font-medium mr-1">Checkouts:</span>
                <span>{property.checkOuts}</span>
              </div>
            </div>

            {/* Price */}
            <div className="mt-4 border-b-prgreen border-b-2 inline-block">
              <p className="text-3xl font-extrabold text-prgreen">
                {property.price.toLocaleString()}{" "}
                <span className="text-2xl">BDT.</span>
              </p>
            </div>
            <div className="my-2">
              <button className="text-basexl font-extrabold text-white bg-prgreen hover:bg-prgreen2 px-4 py-2 rounded-md">
                See Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
