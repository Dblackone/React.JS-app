import React from "react";
import Header from "./components/header";
import Facts from "./components/facts";
import Footer from "./components/footer";
import "./components/App.css";

function App() {
  return (
    <div className="body">
      <Header />
      <Facts /> 
      <Footer />
    </div>
  );
}

export default App;