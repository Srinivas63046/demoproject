import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Logo from "./components/Logo";
import Pages from "./components/Pages";
import Feature from "./components/Feature";
import Service from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="Logo" element={<Logo />} />
          <Route path="Pages" element={<Pages />} />
          <Route path="Feature" element={<Feature />} />
          <Route path="Service" element={<Service />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
