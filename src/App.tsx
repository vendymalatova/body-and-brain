import LandingPage from "./components/LandingPage";
import PostDetail from "./components/PostDetail";
import CookieTerms from "./components/CookieTerms";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Test from "./components/Test";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post1">Post 1</Link>
          </li>
        </ul> */}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:id" element={<PostDetail />} />
          <Route path="/cookie-policy" element={<CookieTerms />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
