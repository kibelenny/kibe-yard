import "../App.css";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 container mx-auto">
      <div className="flex items-center">
        <img src="/logo.png" alt="Kibe Yard" className="h-12 mr-4" />
      </div>
      <div className="space-x-6">
        <a href="/cars" className="text-gray-600 hover:text-gray-800">
          Cars
        </a>
        <a href="#categories" className="text-gray-600 hover:text-gray-800">
          About Us
        </a>
        <a href="#contact" className="text-gray-600 hover:text-gray-800">
          Contact Us
        </a>
      </div>
      <div>
        <img src="/cart.svg" alt="Cart Icon" />
      </div>
    </nav>
  );
};

export default Navbar;
