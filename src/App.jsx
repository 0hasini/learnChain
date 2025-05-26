import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Welcome } from "./components/welcome";
import { Joinnow } from "./components/joinNow";
import { Footer } from "./components/footer";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Joinnow />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
