import "../App.css";
import Banner from "../components/banner.tsx";
import Product from "../components/product.tsx";
import { Car } from "../types";
import React from "react";

// Mock Data
const cars: Car[] = [
  {
    name: "Audi A3",
    id: "AUDI-A3",
    price: 2500000,
    discount: null,
    description:
      "Compact luxury sedan with advanced technology and a sporty design.",
    image: "",
    brand: "audi",
  },
  {
    name: "Audi Q5",
    id: "AUDI-Q5",
    price: 3500000,
    discount: 0.15,
    description:
      "Mid-size SUV with a spacious interior and versatile features.",
    image: "",
    brand: "audi",
  },
  {
    name: "Audi A4",
    id: "AUDI-A4",
    price: 3000000,
    discount: null,
    description: "Mid-size luxury sedan with a refined driving experience.",
    image: "",
    brand: "audi",
  },
];

export const App: React.FC = () => {
  return (
    <main className="container mx-auto">
      <Banner />
      <div className="flex mt-4 gap-4">
        {cars.map((car) => (
          <Product car={car} key={car.id} />
        ))}
      </div>
    </main>
  );
};
