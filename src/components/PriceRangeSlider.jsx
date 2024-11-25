import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";

// Or the namespace:
import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const PriceRangeSlider = ({ minValue, setMinValue, maxValue, setMaxValue }) => {
  const rangeRef = useRef(null);
  const minInputRef = useRef(null);
  const maxInputRef = useRef(null);

  useEffect(() => {
    // Initialize the noUiSlider instance
    const range = rangeRef.current;
    if (range) {
      noUiSlider.create(range, {
        start: [minValue, maxValue],
        range: {
          min: 500,
          max: 1000000,
        },
        connect: true,
        tooltips: true,
        format: {
          to: (value) => Math.round(value),
          from: (value) => Math.round(value),
        },
      });

      // Update the min and max values when the slider is updated
      range.noUiSlider.on("update", (values) => {
        setMinValue(Number(values[0]));
        setMaxValue(Number(values[1]));
      });
    }

    return () => {
      if (range) {
        range.noUiSlider.destroy();
      }
    };
  }, []);

  // Handle input changes and debounce
  useEffect(() => {
    const minInput = minInputRef.current;
    const maxInput = maxInputRef.current;

    const debouncedUpdate = _.debounce((value, target) => {
      const newValues =
        target === "min" ? [value, maxValue] : [minValue, value];
      rangeRef.current.noUiSlider.set(newValues);
    }, 200);

    if (minInput) {
      minInput.addEventListener("input", (e) =>
        debouncedUpdate(e.target.value, "min")
      );
    }
    if (maxInput) {
      maxInput.addEventListener("input", (e) =>
        debouncedUpdate(e.target.value, "max")
      );
    }

    return () => {
      if (minInput) {
        minInput.removeEventListener("input", () => {});
      }
      if (maxInput) {
        maxInput.removeEventListener("input", () => {});
      }
    };
  }, [minValue, maxValue]);

  return (
    <div className="price-range-slider">
      {/* Range Slider */}
      <label className="sr-only" htmlFor="hs-pass-values-to-inputs">
        Price Range
      </label>
      <div
        id="hs-pass-values-to-inputs"
        ref={rangeRef}
        className="--prevent-on-load-init"
      ></div>

      {/* Min and Max Inputs */}
      <div className="flex flex-row space-x-4 mt-5">
        <div className="basis-1/2">
          <label
            htmlFor="hs-pass-values-to-inputs-min-target"
            className="block text-sm font-medium mb-2"
          >
            Min price:
          </label>
          <input
            id="hs-pass-values-to-inputs-min-target"
            ref={minInputRef}
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            type="number"
            value={minValue}
            onChange={(e) => setMinValue(Number(e.target.value))}
          />
        </div>
        <div className="basis-1/2">
          <label
            htmlFor="hs-pass-values-to-inputs-max-target"
            className="block text-sm font-medium mb-2"
          >
            Max price:
          </label>
          <input
            id="hs-pass-values-to-inputs-max-target"
            ref={maxInputRef}
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            type="number"
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
