import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Nav from './components/Nav';
import Footer from './components/Footer'
import CoursesPage from './pages/CoursesPage'
import CourseDetails from './pages/CourseDetails'
import BlogPage from './pages/BlogPage';
import './App.css'

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path='/courses/:id' element={<CourseDetails/>} />
        <Route path='/blog' element={<BlogPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
