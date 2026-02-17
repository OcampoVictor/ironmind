import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Disciplines from './components/Disciplines';

// import Gallery from './components/Gallery'; // Removed old gallery
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import DisciplinesPage from './pages/DisciplinesPage';
import SchedulePage from './pages/SchedulePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import MembershipPlans from './components/MembershipPlans';
// import DisciplinesCTA from './components/DisciplinesCTA'; // Replaced by OfferCTA in Home
import OfferCTA from './components/OfferCTA';
import CustomMap from './components/CustomMap';
import WhatsAppButton from './components/WhatsAppButton';

const HomePage = () => (
  <>
    <Hero />
    <Disciplines />
    {/* <Gallery /> Removed from Home */}
    <Testimonials />
    <MembershipPlans />
    <OfferCTA />
    <CustomMap />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white selection:bg-amber-500/30 selection:text-amber-500">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/disciplinas" element={<DisciplinesPage />} />
            <Route path="/horarios" element={<SchedulePage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;


