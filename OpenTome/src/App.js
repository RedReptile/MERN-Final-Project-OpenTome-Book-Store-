import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from './components/Home/HomeComponent';
import CategoriesComponent from './components/Categories/CategoriesComponent';
import Navbar from "./components/Navbar/navbar";
import SignupPage from "./components/Regisster and Signin/Signup";
import SigninPage from "./components/Regisster and Signin/Signin";
import AboutComponent from "./components/About/AboutComponent";
import ProfileComponents from "./components/Profile/profile";
import ProfilePage from "./components/Profile/profile";
import OrderComponent from "./components/Order/orderComponets";
import BooksRowComponent from './components/Card/BookRowComponets';
import PaymentComponent from "./components/Payment/PaymentComponent";
import AdminComponents from "./components/Admin/AdminComponents";
import ProtectedRoute from "./components/Protection/ProtectedRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/categories" element={<CategoriesComponent />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/profile" element={<ProfileComponents />} />
            <Route path="/profile/*" element={<ProfilePage />} />
            <Route path="/order" element={<OrderComponent />} />
            <Route path="/order/:bookId" element={<OrderComponent />} />
            <Route path="/books" element={<BooksRowComponent />} />
            <Route path="/payment" element={<PaymentComponent />} />
            
            <Route path="/admin" element={<ProtectedRoute component={AdminComponents} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
