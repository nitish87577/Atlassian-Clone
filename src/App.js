import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingpage/LandingPage";
import Landingpage1 from "./components/landingpage1/Landingpage1";
import LandingPage2 from "./components/landingpage2/LandingPage2";
import Landingpage3 from "./components/landingpage3/Landingpage3";
import LandingPage4 from "./components/landingpage4/LandingPage4";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Landingpage1 />
      <LandingPage2 />
      <Landingpage3 />
      <LandingPage4 />
      <Footer />
    </div>
  );
}

export default App;
