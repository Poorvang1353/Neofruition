import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

function App() {
  return (
    <div>
     <Navbar/>
     <div className="container mt-3">
      <Shop/>
     </div>
    </div>
  );
}

export default App;
