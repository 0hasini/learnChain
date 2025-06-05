import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Welcome } from "./components/welcome";
import { JoinBanner } from "./components/JoinBanner";
import { Footer } from "./components/footer";
import { Login } from "./components/Login";
import { JoinNow } from "./components/JoinNow";
import { LeaderBoard } from "./components/LeaderBoard";
import { StudentDashboard } from "./components/StudentDashboard-1";
import { StudentDashboard2 } from "./components/StudentDashboard-2";
import { StudentDashboard3 } from "./components/StudentDashboard-3";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <JoinBanner />
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
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<JoinNow />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/studentdashboard/home" element={<StudentDashboard/>}/>
          <Route path="/studentdashboard/assignments" element={<StudentDashboard2/>}/>
          <Route path="/studentdashboard/questions" element={<StudentDashboard3/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
