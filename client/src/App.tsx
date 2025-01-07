import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './lib/Signup';
import SignIn from './lib/Signin';
import { Dashboard } from './lib/Dashboard';
import './App.css';
import { OnlyTweets } from './lib/OnlyTweets';
import { OnlyDocuments } from './lib/OnlyDocuments';
import { OnlyLinks } from './lib/OnlyLinks';
import { OnlyVideos } from './lib/OnlyVideos';
import LoaderPage from './components/ui/loader';

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <LoaderAndRoutes />
    </Router>
  );
}

const LoaderAndRoutes = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1 second when route changes
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust this timeout based on your preference or dynamic loading

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [location]);

  return (
    <>
      {isLoading && <LoaderPage />}  {/* Show Loader if loading */}
      <Routes>
        {/* Define routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/tweets" element={<OnlyTweets />} />
        <Route path="/videos" element={<OnlyVideos />} />
        <Route path="/documents" element={<OnlyDocuments />} />
        <Route path="/links" element={<OnlyLinks />} />
      </Routes>
    </>
  );
}

export default App;
