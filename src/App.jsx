import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CharacterDetail from './pages/CharacterDetail';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import CharacterList from './pages/CharacterList';

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-900 text-white">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
