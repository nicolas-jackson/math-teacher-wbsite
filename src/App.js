import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './global.css'
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import About from "./pages/About/About";
import TopicPage from './pages/TopicPage'
import Lessons from './pages/Lessons/Lessons';


function App() {
  return (
    <Router>
      <Navbar/>
    
    <main className="app-container">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/lessons" element={<Lessons/>}></Route>
        <Route path="/lessons/:topicId" element={<TopicPage />} />
        <Route path="/about" element={<About/>}></Route>
        
      </Routes>

    </main>
    </Router>

  );
}

export default App;
