import "./App.css";
import React from "react";
import Nav from "./nav";
import Shop from "./shop";
import About from "./about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetails from "./itemDetails";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Home Page</h1>
              </div>
            }
          />
          <Route path="/about" Component={About} />
          <Route path="/shop" Component={Shop} />
          <Route path="/shop/:id" Component={ItemDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
