import { Routes, Route } from "react-router-dom";

import SmoothScroll from "./components/SmoothScroll";
import Layout from "./components/layout/Layout";
import HomePage from "./components/home-page/HomePage";
import BookingPage from "./components/booking-page/BookingPage";
import NotFoundPage from "./components/404-page/NotFoundPage";

export default function App() {
  return (
    <SmoothScroll>
      <Layout>
        <Routes>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/booking-page"
            element={<BookingPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </Layout>
    </SmoothScroll>
  );
}
