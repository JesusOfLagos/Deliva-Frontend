import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResetPassword from "./components/Auth/resetPassword";
import ForgotPassword from "./components/Auth/forgotPassword";
import SignIn from "./components/Auth/signIn";
import NotFound from "./components/Auth/notFound";
import Home from "./components/home";
import SignUp from "./components/Auth/signUp";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import "./App.css";




export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />

          {/* If no route matches, show the NotFound component */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
