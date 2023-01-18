import Layout from "./components/layout/Layout";
import Home from "./components/main-sections/home/Home";
import LoadingSpinner from "./components/main-sections/home/LoadingSpinner";
import SendYourReview from "./components/main-sections/reviews&comments/SendYourReview";
import AboutPage from "./pages/AboutPage";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReviewAndCommentPage from "./pages/ReviewAndCommentPage";
function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/onlinebookstore/"
          exact
          element={<Navigate to="/onlinebookstore/home" />}
        />
        <Route path="/onlinebookstore/home" element={<HomePage />} />
        <Route path="/onlinebookstore/about" element={<AboutPage />} />
        <Route
          path="/onlinebookstore/comments&reviews"
          element={<ReviewAndCommentPage />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
