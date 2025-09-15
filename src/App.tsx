// import React from 'react'
import Registration from "./Pages/Registration"
import Ticket from "./Pages/Ticket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>

      </Router>

  );
}

export default App;
