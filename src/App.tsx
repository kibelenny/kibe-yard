import React from 'react';
import './App.css';

// Mock Data
const cars = [
    { id: 1, brand: 'Audi', type: 'Diesel', model: 'Q7', price: '$70,000' },
    { id: 2, brand: 'BMW', type: 'Diesel', model: 'X5', price: '$68,000' },
    { id: 3, brand: 'BYD', type: 'Electric', model: 'Tang', price: '$45,000' },
    { id: 4, brand: 'Tesla', type: 'Electric', model: 'Model Y', price: '$55,000' },
];

const App = () => {
    const [filter, setFilter] = React.useState<string>('all');

    const filteredCars = cars.filter(car =>
        filter === 'all' ? true : car.type === filter
    );

    return (
        <div className="bg-white">
            {/* Navbar */}
            <nav className="flex items-center justify-between p-6">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Kibe Yard" className="h-12 mr-4" />
                    <h1 className="text-2xl font-bold">Kibe Yard</h1>
                </div>
                <div className="space-x-6">
                    <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
                    <a href="#categories" className="text-gray-600 hover:text-gray-800">Categories</a>
                    <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact Us</a>
                </div>
            </nav>

            {/* Promotional Banner */}
            <section className="py-12 text-center">
                <h2 className="text-4xl font-bold mb-6">Drive Your Dream</h2>
                <p className="text-xl text-gray-600 mb-8">Premium vehicles at exceptional prices</p>
                <div className="flex justify-center space-x-4">
                    <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">View All Cars</button>
                    <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white">Contact Us</button>
                </div>
            </section>

            {/* Product Listing */}
            <section className="py-12">
                <div className="container mx-auto">
                    <div className="flex justify-center mb-8">
                        <button
                            className={`px-6 py-3 mr-4 ${filter === 'all' ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            All
                        </button>
                        <button
                            className={`px-6 py-3 mr-4 ${filter === 'Electric' ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => setFilter('Electric')}
                        >
                            Electric
                        </button>
                        <button
                            className={`px-6 py-3 ${filter === 'Diesel' ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => setFilter('Diesel')}
                        >
                            Diesel
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCars.map(car => (
                            <div key={car.id} className="bg-white shadow-md p-6 rounded">
                                <h3 className="text-2xl font-semibold mb-2">{car.brand} {car.model}</h3>
                                <p className="text-gray-600 mb-4">{car.type} | {car.price}</p>
                                <button className="w-full px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <p className="text-gray-600 mb-4">Kibe Yard | Luxury Vehicle Sales</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#"><i className="fab fa-facebook text-gray-600 hover:text-blue-500"></i></a>
                        <a href="#"><i className="fab fa-twitter text-gray-600 hover:text-blue-400"></i></a>
                        <a href="#"><i className="fab fa-instagram text-gray-600 hover:text-pink-500"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;