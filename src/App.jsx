import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-900 text-white">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/characters" element={<Home />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
