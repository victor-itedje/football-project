import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ChatUI from './components/Chat';
import Features from './components/Features';
import UserDashboard from './components/UserDashboard';
import LatestNews from './components/LatestNews';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatUI />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/latestnews" element={<LatestNews />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
