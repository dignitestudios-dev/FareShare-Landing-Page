import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms-and-conditions" element={<TermsCondition />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
