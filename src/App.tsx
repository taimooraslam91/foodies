import { SetStateAction, useState, ChangeEvent } from "react";
import Header from "./components/common/Header";
import Hero from "./components/common/Hero";
import CardList from "./components/common/CardList";
import Footer from "./components/common/Footer";
import { restaurants } from "./data";
import "./App.scss";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = searchTerm
    ? restaurants.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : restaurants;

  return (
    <>
      <Header searchTerm={searchTerm} handleSearch={handleSearchChange} />
      <Hero />
      <div className="container mx-auto pt-16 px-3">
        <h3 className="text-3xl font-extralight mb-5">Cities</h3>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-pink-600 text-white rounded-lg">
            All
          </button>
          <button className="px-4 py-2 bg-pink-400 text-white rounded-lg">
            Lahore
          </button>
          <button className="px-4 py-2 bg-pink-400 text-white rounded-lg">
            Karachi
          </button>
        </div>
      </div>
      <div className="container mx-auto py-16">
        <h3 className="text-4xl font-extralight mx-3 mb-5">
          Saaray restaurants
        </h3>
        <CardList restaurants={filteredData} />
      </div>
      <Footer />
    </>
  );
}

export default App;
