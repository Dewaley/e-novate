import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";
import Nav from "./components/universal/Nav";
import Footer from "./components/universal/Footer";
import CoursesPage from "./pages/courses/CoursesPage";
import CourseDetails from "./pages/course/CourseDetails";
import BlogPage from "./pages/blog/BlogPage";
import ArticlePage from "./pages/article/ArticlePage";
import LoginPage from "./pages/login/LoginPage";
import ContactPage from "./pages/contact/ContactPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/article/:id" element={<ArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
