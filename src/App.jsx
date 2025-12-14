import './App.css'
import Main from './pages/Main.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signup from './pages/signUp.jsx';
import Login from './pages/login.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

function App() {

  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/signUp" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export default App
