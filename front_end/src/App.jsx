import './App.css'
import Main from './pages/Main.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signup from './pages/signUp.jsx';
import Login from './pages/login.jsx';
import Admin from './pages/Admin.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

function App() {

  return (
    <>
      <Navbar />

      <ErrorBoundary>
        <Routes>

          <Route path="/" element={<Main />} />

          <Route path="/home" element={<Home />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Upload Page */}
          <Route path="/admin" element={<Admin />} />

        </Routes>
      </ErrorBoundary>

      <Footer />
    </>
  )
}

export default App