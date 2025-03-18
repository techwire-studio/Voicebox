import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

const ServicesPage = React.lazy(() => import("./Pages/ServicesPage"))
const Studio = React.lazy(() => import("./Pages/StudioPage"))
const History = React.lazy(() => import("./Pages/HistoryPage"))
const BlogsPage = React.lazy(() => import("./Pages/BlogsPage"))
const BookNow = React.lazy(() => import("./Pages/BookNow"))
const PortfolioPage = React.lazy(() => import("./Pages/PortfolioPage"))


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<ServicesPage />}/>
        <Route path="/studio" element={<Studio />}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/blogs" element={<BlogsPage/>}/>
        <Route path="/book-now" element={<BookNow/>}/>
        <Route path="/portfolio" element={<PortfolioPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
