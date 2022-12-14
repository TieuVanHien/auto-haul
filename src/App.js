import { Nav } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { Home, About, Service, Tracking, FormSubmit, Footer } from "./section";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Home />
        <About />
        <Service />
        <Tracking />
        <FormSubmit />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
