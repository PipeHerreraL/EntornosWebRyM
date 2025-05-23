import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CharacterDetail from './pages/CharacterDetail';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import CharacterList from './pages/CharacterList';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col bg-gray-900 text-white">
          <main className='flex-grow'>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/characters" element={<CharacterList />} />
              <Route path="/characters/:id" element={<CharacterDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
