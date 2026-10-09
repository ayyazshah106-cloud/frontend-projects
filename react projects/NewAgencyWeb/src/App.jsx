import "./App.css";
import Catagory from "./Components/Catagory";
import Footer from "./Components/Footer";

import NavBar from "./Components/NavBar";

import News from "./page/News";

// main app, just puts all the parts together in order
function App() {
  return (
    <>
      {/* top bar with search + sidebar */}
      <NavBar />

      {/* category buttons */}
      <Catagory />
      {/* main news list */}
      <News />
      {/* bottom part of the page */}
      <Footer />
    </>
  );
}

export default App;
