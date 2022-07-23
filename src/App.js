import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Nav from './components/Nav';
import Footer from './components/Footer'
import CoursesPage from './pages/CoursesPage'
import CourseDetails from './pages/CourseDetails'
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import LoginPage from './pages/LoginPage';
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
        <Route path='/blog/:id' element={<ArticlePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
