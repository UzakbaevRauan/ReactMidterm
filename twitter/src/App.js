
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HomePage from './templates/Home';
import ProfilePage from './templates/profile';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      
      
    </Routes>
  </Router>
  );
}

export default App;
