import { NavBar } from "./components/NavBar";
import { InvoiceTracker } from "./InvoiceTracker";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InvoiceInfo } from "./InvoiceInfo";

export const Main = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex flex-col items-center lg:justify-center px-6 sm:px-12">
      <NavBar toggle={toggleDarkMode} darkMode={darkMode} />
      <Router>
        <Routes>
          <Route path="/" element={<InvoiceTracker />} />
          <Route path="/:id" element={<InvoiceInfo />} />
        </Routes>
      </Router>
    </div>
  );
};
