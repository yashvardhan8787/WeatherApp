import "./App.css"

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import WeatherDetail from "./components/weatherDetail/WeatherDetail";
import {AppContext} from "./context/AppContext";
import ForcastSlider from "./components/forcasts/forcastslider/ForcastSlider";
import VisualData from "./components/graph/VisualData";


function App() {
 

  return (
    <>
      <center>
        <AppContext>
          

            <Navbar></Navbar>
            <WeatherDetail></WeatherDetail>
            <VisualData></VisualData>
            <ForcastSlider></ForcastSlider>
            <Footer></Footer>
          
        </AppContext>
      </center>
    </>
  );
}

export default App;
