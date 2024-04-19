import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dog from './pages/Dog'
import Prodog from './pages/Prodog'

const App = () => {

 


  return (
    <Router>
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
      </Routes>
    </Router>
  )
}

export default App

