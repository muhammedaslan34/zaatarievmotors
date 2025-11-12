import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';
import { Toaster } from './components/ui/sonner';
import Home from './pages/Home';
import Models from './pages/Models';
import Offers from './pages/Offers';
import Compare from './pages/Compare';
import BookTestDrive from './pages/BookTestDrive';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A] text-[#E6F6FF]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/book-test-drive" element={<BookTestDrive />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <StickyActions />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}