import { Routes, Route } from "react-router-dom";

import SmoothScroll from "./components/SmoothScroll";
import Layout from "./components/layout/Layout";
import HomePage from "./components/home-page/HomePage";
import BookingPage from "./components/booking-page/BookingPage";

export default function App() {
  return (
    <SmoothScroll>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking-page" element={<BookingPage />} />
        </Routes>
      </Layout>
    </SmoothScroll>
  );
}
