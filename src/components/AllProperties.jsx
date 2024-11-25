import React, { useState } from "react";
import PropertyCard from "./PropertyCard";

import PriceRangeSlider from "./PriceRangeSlider.jsx";
import { usePropertyContext } from "../context/PropertyContext.jsx";

const AllProperties = () => {
  const { allProperties } = usePropertyContext();
  const [minValue, setMinValue] = useState(500);
  const [maxValue, setMaxValue] = useState(1000000);
  const [sortProperty, setSortProperty] = useState("");
  const [selectedType, setSelectedType] = useState(""); // For property type
  const [selectedStatus, setSelectedStatus] = useState(""); // For rental status
  const [searchTerm, setSearchTerm] = useState(""); // For search field

  // Filtered properties based on selectedType, selectedStatus, searchTerm, and price range
  const filteredProperties = allProperties
    .filter((property) => {
      const matchesType = selectedType ? property.type === selectedType : true;
      const matchesStatus = selectedStatus
        ? property.status === selectedStatus
        : true;
      const matchesSearch = searchTerm
        ? property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.address.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      const matchesPrice =
        property.price >= minValue && property.price <= maxValue;

      return matchesType && matchesStatus && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      if (sortProperty === "asc") {
        return a.price - b.price; // Sort by price ascending
      } else if (sortProperty === "dsc") {
        return b.price - a.price; // Sort by price descending
      }
      return 0; // No sorting if no sort property is set
    });

  // Reset all filters to their initial state
  const clearFilters = () => {
    setMinValue(500);
    setMaxValue(1000000);
    setSortProperty("");
    setSelectedType("");
    setSelectedStatus("");
    setSearchTerm("");
  };

  return (
    <div className="section py-20 px-10">
      <h2 className="font-bold text-prgreen text-4xl heading text-center ">
        Popular Properties
      </h2>
      {/* Filters */}
      <div className="flex justify-between items-end px-10 py-6 mb-5">
        <div className=" flex flex-col gap-4 justify-start items-start">
          <div className="w-full flex justify-start  gap-2">
            <form
              className="w-full flex-auto
               "
              onSubmit={(e) => e.preventDefault()} // Prevent form submission
            >
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Search by name or address..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm
                />
              </div>
            </form>
            <button className="flex-none bg-prgreen hover:bg-prgreen2 px-3 text-white font-semibold rounded-md" onClick={clearFilters}>Clear Filters</button>
          </div>
          <div className="flex space-x-4 pb-2">
            {/* Dropdown for Property Type */}
            <select
              className="border rounded px-4 py-2"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Commercial">Commercial</option>
            </select>

            {/* Dropdown for Rental Status */}
            <select
              className="border rounded px-4 py-2"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="Available">Available</option>
              <option value="Rented">Rented</option>
            </select>
            <select
              className="border rounded px-4 py-2"
              value={sortProperty}
              onChange={(e) => setSortProperty(e.target.value)}
            >
              <option value="">Sort by Price</option>
              <option value="asc">Price: Low to High</option>
              <option value="dsc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <PriceRangeSlider
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
        />
      </div>
      {/* Properties */}
      <div className="allCard flex justify-center w-full">
        {filteredProperties.length > 0 ? (
          <PropertyCard properties={filteredProperties} />
        ) : (
          <p>No properties match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default AllProperties;
