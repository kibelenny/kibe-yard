import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import Cars from "./pages/Cars.tsx";
import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer.tsx";

const App = () => {
  return (
    <section className="bg-white">
      <Navbar />
      <main className="min-h-max">
        <Router>
          <Routes>
            <Route path="/cars" element={<Cars />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </section>
  );
};

export default App;
