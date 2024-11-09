import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from "./Pages/HomePage/HomePage"
import AboutPage from "./Pages/AboutPage/AboutPage"
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import HousingPage from "./Pages/HousingPage/HousingPage"


import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';





function AppRouter() {
    return (

        <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutpage' element={<AboutPage />} />
          <Route path='/housingpage/:id' element={<HousingPage />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>


    )




}

export default AppRouter
