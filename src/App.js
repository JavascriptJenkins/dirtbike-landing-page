import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Auth from './components/auth/Auth';
import Welcome from './components/welcome/Welcome';
import Dev from './components/dev/Dev';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Organization from './components/organization/Organization';
import Qualification from './components/qualification/Qualification';
import Dashboard from './components/qualification/Qualification';
// import Work from './components/Portfolio/Work';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import { Auth0Provider } from '@auth0/auth0-react';

//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useNavigate } from "react-router-dom";


const App = () => {
  return (
    <>



        <Auth0Provider
            domain="dev-c4crw5imbgu6axa8.us.auth0.com"
            clientId="cOe5QtuKBI0J8OhZZd3edQN1cyNqfLKZ"
            authorizationParams={{
              redirect_uri: window.location.origin,
              audience: "https://techvvs.io/api/read"
            }}
          >
<Header />
      <main className='main'>

            <Home />
            <About />
            <Auth />
            <Organization />
            <Dashboard />

      </main>



    </Auth0Provider>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App