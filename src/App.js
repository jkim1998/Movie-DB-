import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Footer } from "./components";

import "./styles.css";

import ContactUs from "./pages/contact/Contactme";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="FAQ" />
        <Route path="helpcenter" />
        <Route path="terms"/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
