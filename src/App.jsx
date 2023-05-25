//css
import './App.css'

//components
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
// import { MyContext } from "./MyContext";
import { useContext } from "react";
import { ContextUser } from './context/UserContext';
import { Navigate } from 'react-router-dom';

import AppNav from './components/AppNav/AppNav';
// import AppFooter from './components/AppFooter/AppFooter';

//views
import Home from './views/Home/Home';
import Register from './views/Register/Register';
import LogIn from './views/LogIn/LogIn';
import UserProfile from './views/UserProfile/UserProfile';
import UserProfileEdit from './views/UserProfileEdit/UserProfileEdit';
import UserDashboard from './views/UserDashboard/UserDashboard';
import UserDashboardEdit from './views/UserDashboardEdit/UserDashboardEdit';
import UserFavourites from './views/UserFavourites/UserFavourites';
import UserCart from './views/UserCart/UserCart';
import GalleryBoardgames from './views/GalleryBoardgames/GalleryBoardgames';
import ProductDetails from './views/ProductDetails/ProductDetails';
import NotFound from './views/NotFound/NotFound';

function App() {
  const { user } = useContext(ContextUser);

  return (
    <>
      <div className="app">
        {/* <MyContext> */}
        <AppNav />
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/login"
              element={!user ? <LogIn /> : <Navigate to="/user-profile" />}
            />

            <Route
              path="/user-profile"
              element={user ? <UserProfile /> : <Navigate to="/login" />}
            />

            <Route
              path="/user-profile-edit"
              element={<UserProfileEdit />}
            />

            <Route
              path="/user-dashboard"
              element={<UserDashboard />}
            />

            <Route
              path="/user-dashboard-edit"
              element={<UserDashboardEdit />}
            />

            <Route
              path="/user-favourites"
              element={<UserFavourites />}
            />

            <Route
              path="/user-cart"
              element={<UserCart />}
            />

            <Route
              path="/gallery-boardgames"
              element={<GalleryBoardgames />}
            />

            <Route
              path="/product-details"
              element={<ProductDetails />}
            />

            <Route path='*' element={<NotFound />} />
          </Routes>

        </main>
        {/* <AppFooter /> */}
        {/* </MyContext> */}
      </div>
    </>
  )
}

export default App
