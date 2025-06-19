import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage.tsx';
import Navbar from './Components/Navbar.tsx';
import Footer from './Components/Footer.tsx'; 
import GeneralInfo from './Components/GeneralInfo.tsx';
import OurServices from './Components/OurServices.tsx';
import AboutUs from './Components/AboutUs.tsx';
import ContactUs from './Components/ContactUs.tsx';
import CropInfoIntercropping from './InterCropping.tsx';
import CropRecommendation from './CropRecommendation.tsx';
import DiseasePrediction from './DiseasePrediction.tsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/general-info"element={<GeneralInfo />} />
             <Route path="/crop_intercropping" element={<CropInfoIntercropping />} />
             <Route path="/recommend_crop" element={<CropRecommendation />} />
            <Route path="/predict_disease" element={<DiseasePrediction />} />
          
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
