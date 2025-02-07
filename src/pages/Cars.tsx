import Product from "../components/product.tsx";
import { Car } from "../types";
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
  {
    name: "Audi A6",
    id: "AUDI-A6",
    price: 4000000,
    discount: 0.1,
    description:
      "Full-size luxury sedan with elegant design and advanced features.",
    image: "",
    brand: "audi",
  },
  {
    name: "Audi Q7",
    id: "AUDI-Q7",
    price: 5000000,
    discount: null,
    description:
      "Full-size SUV with a luxurious interior and powerful performance.",
    image: "",
    brand: "audi",
  },
  {
    name: "BMW 3 Series",
    id: "BMW-3",
    price: 2800000,
    discount: 0.05,
    description: "Compact luxury sedan with a sporty driving experience.",
    image: "",
    brand: "bmw",
  },
  {
    name: "BMW X5",
    id: "BMW-X5",
    price: 3800000,
    discount: null,
    description: "Mid-size SUV with a spacious interior and advanced features.",
    image: "",
    brand: "bmw",
  },
  {
    name: "BMW 5 Series",
    id: "BMW-5",
    price: 3200000,
    discount: 0.1,
    description: "Mid-size luxury sedan with a refined driving experience.",
    image: "",
    brand: "bmw",
  },
  {
    name: "BMW 7 Series",
    id: "BMW-7",
    price: 4500000,
    discount: null,
    description:
      "Full-size luxury sedan with elegant design and advanced features.",
    image: "",
    brand: "bmw",
  },
  {
    name: "BMW X7",
    id: "BMW-X7",
    price: 5500000,
    discount: 0.15,
    description:
      "Full-size SUV with a luxurious interior and powerful performance.",
    image: "",
    brand: "bmw",
  },
  {
    name: "BYD Tang",
    id: "BYD-TANG",
    price: 2200000,
    discount: null,
    description: "Mid-size SUV with a modern design and advanced technology.",
    image: "",
    brand: "byd",
  },
  {
    name: "BYD Han",
    id: "BYD-HAN",
    price: 2800000,
    discount: 0.1,
    description: "Full-size sedan with elegant design and advanced features.",
    image: "",
    brand: "byd",
  },
  {
    name: "BYD Song",
    id: "BYD-SONG",
    price: 2000000,
    discount: null,
    description: "Compact SUV with a versatile interior and modern technology.",
    image: "",
    brand: "byd",
  },
  {
    name: "BYD Yuan",
    id: "BYD-YUAN",
    price: 1800000,
    discount: 0.05,
    description: "Small SUV with a stylish design and advanced features.",
    image: "",
    brand: "byd",
  },
  {
    name: "BYD Qin",
    id: "BYD-QIN",
    price: 1500000,
    discount: null,
    description: "Compact sedan with a modern design and advanced technology.",
    image: "",
    brand: "byd",
  },
  {
    name: "Tesla Model 3",
    id: "TESLA-M3",
    price: 3000000,
    discount: 0.1,
    description:
      "Compact electric sedan with a sleek design and advanced technology.",
    image: "",
    brand: "tesla",
  },
  {
    name: "Tesla Model Y",
    id: "TESLA-MY",
    price: 3500000,
    discount: null,
    description: "Compact SUV with a spacious interior and advanced features.",
    image: "",
    brand: "tesla",
  },
  {
    name: "Tesla Model S",
    id: "TESLA-MS",
    price: 4500000,
    discount: 0.15,
    description:
      "Full-size electric sedan with elegant design and advanced features.",
    image: "",
    brand: "tesla",
  },
  {
    name: "Tesla Model X",
    id: "TESLA-MX",
    price: 5500000,
    discount: null,
    description:
      "Full-size SUV with a luxurious interior and powerful performance.",
    image: "",
    brand: "tesla",
  },
  {
    name: "Tesla Model 3 Standard Range",
    id: "TESLA-M3-SR",
    price: 2800000,
    discount: 0.05,
    description:
      "Compact electric sedan with a sleek design and advanced technology.",
    image: "",
    brand: "tesla",
  },
];

const Cars = () => {
  return (
    <section className="container mx-auto space-y-8">
      <article className="bg-gray-100">
        <select>
          <option value="all">All</option>
          <option value="tesla">Tesla</option>
          <option value="ford">Ford</option>
          <option value="toyota">Toyota</option>
        </select>
        <select>
          <option value="price">Price</option>
          <option value="discount">Discount</option>
        </select>
      </article>
      <main className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <Product car={car} key={car.id} />
        ))}
      </main>
    </section>
  );
};

export default Cars;
