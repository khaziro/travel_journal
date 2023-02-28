import './App.css';
import Navbar from "./components/navbar/navbar.component";
import Location from "./components/location/location.component";

function App() {
  return (
    <div className="main_app_container">
      <Navbar/>
      <Location/>
    </div>
  );
}

export default App;
