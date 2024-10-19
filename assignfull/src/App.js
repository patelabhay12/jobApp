import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import JobPost from './components/JobPost';
import OtpVerify from './components/OtpVerify';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/verification" element={<OtpVerify/>} />
          <Route path="/job-post" element={<JobPost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
