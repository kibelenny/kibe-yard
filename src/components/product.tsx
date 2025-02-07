import { Car } from "../types";
import React from "react";

const Product: React.FC<{ car: Car }> = ({ car }) => {
  return (
    <div className="border border-gray-200 rounded-lg space-y-4 transition-300 hover:shadow-md hover:cursor-pointer">
      <img
        src="/car.jpeg"
        alt={car.name}
        className="relative w-full object-cover rounded-t-lg"
      />
      <div className="p-4 space-y-4">
        <div className="flex space-x-2">
          <p className="bg-blue-300 text-white rounded-md text-xs p-1 flex items-center">
            2000
          </p>
          <p className="text-xl font-medium">{car.name}</p>
        </div>
        <p className="line-clamp-3">{car.description}</p>
      </div>
      <div className="text-lg border-t border-gray-200 p-4">
        <p>KSHS {car.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Product;
