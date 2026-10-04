import "./App.css";
import Catagory from "./Components/Catagory";
import Loader from "./Components/Loader";
import NavBar from "./Components/NavBar";
import News from "./page/News";

function App() {
  return (
    <>
      <NavBar />
      <Catagory />
      <News />
    </>
  );
}

export default App;
