import "./App.css";
import AvantagesSection from "./components/AvantagesSection";
import BestSellerSection from "./components/BestSellerSection";
import ConseilsSection from "./components/ConseilsSection";
import ContactSection from "./components/ContactSection";
import CoverSection from "./components/CoverSection";
import FooterSection from "./components/FooterSection";
import ForMoreSection from "./components/ForMoreSection";
import Header from "./components/Header";
import TheSixSection from "./components/TheSixSection";
import PartnersSection from "./components/partnersSection";

function App() {
  return (
    <div className="App">
      <Header />
      <CoverSection />
      <BestSellerSection />
      <ConseilsSection />
      <ContactSection />
      <PartnersSection />
      <TheSixSection />
      <AvantagesSection />
      <ForMoreSection />
      <FooterSection />
    </div>
  );
}

export default App;
