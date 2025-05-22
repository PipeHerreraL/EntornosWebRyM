import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CharacterDetail from './CharacterDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
