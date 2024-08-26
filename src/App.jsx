import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import OverviewPage from "./pages/OverviewPage";
import SideBar from "./components/common/SideBar";
import UserPage from "./pages/Userpage";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Background styles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500  via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <SideBar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </div>
  );
};

export default App;
