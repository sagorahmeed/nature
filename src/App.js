import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dog from './pages/Dog'
import Prodog from './pages/Prodog'
import Product from './pages/Product'
import Procat from './pages/Procat'
import Cat from './pages/Cat'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brand from './pages/Brand'
import ScrollToTop from './components/ScrollToTop'
import Result from './pages/Result'


const App = () => {


  return (
    <Router>
        <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>

              <Header />
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/about"
          element={
            <DefaultLayout>
              <Header />
              <About />
            </DefaultLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <DefaultLayout>
              <Header />
              <Contact />
            </DefaultLayout>
          }
        />
        <Route
          path="/dog"
          element={
            <DefaultLayout>
              <Header />
              <Dog />
            </DefaultLayout>
          }
        />
        <Route
          path="/prodog"
          element={
            <DefaultLayout>
              <Header />
              <Prodog />
            </DefaultLayout>
          }
        />
         <Route
          path="/procat"
          element={
            <DefaultLayout>
              <Header />
              <Procat />
            </DefaultLayout>
          }
        />
        <Route
          path="/Product/:productId"
          element={
            <DefaultLayout>
              <Header />
              <Product />
            </DefaultLayout>
          }
        />
        <Route
          path="/cat"
          element={
            <DefaultLayout>
              <Header />
              <Cat />
            </DefaultLayout>
          }
        />
        <Route
          path="/brand"
          element={
            <DefaultLayout>
              <Header />
              <Brand />
            </DefaultLayout>
          }
        />
        <Route
          path="/result"
          element={
            <DefaultLayout>
              <Header />
              <Result />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App



