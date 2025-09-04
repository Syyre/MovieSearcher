import { useState } from "react";
import bg from "./assets/BG.png";
import Search from "./components/search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <main style={{ backgroundImage: `url(${bg})` }}>
        <div className="pattern" />
        <div className="wrapper">
          <header>
            <img src="src/assets/hero-img.png" alt="Hero" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without Hassle
            </h1>
          </header>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </main>
    </div>
  );
};
export default App;
