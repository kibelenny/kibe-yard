const Banner = () => {
  return (
    <div className="flex space-x-8 w-full shadow px-12 py-4 rounded border border-gray-200 bg-white">
      <div>
        <img
          src="/car.jpeg"
          className="aspect-square size-60 object-cover"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-5xl font-semibold mb-2 uppercase text-center">
          New Arrivals
        </h1>
      </div>
    </div>
  );
};

export default Banner;
