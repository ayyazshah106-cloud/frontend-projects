import "./App.css";
import Catagory from "./Components/Catagory";
import Footer from "./Components/Footer";

import NavBar from "./Components/NavBar";

import News from "./page/News";

function App() {
  return (
    <>
      <NavBar />

      <Catagory />
      <News />
      <Footer />
    </>
  );
}

export default App;
