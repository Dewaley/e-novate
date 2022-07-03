import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Nav from './components/Nav';
import Footer from './components/Footer'
import CoursesPage from './pages/CoursesPage'

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
