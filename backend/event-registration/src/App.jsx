import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RegistrationForm event='event1' />} />
        <Route path='/dashboard' element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
