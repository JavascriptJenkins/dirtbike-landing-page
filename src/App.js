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
import Qualification from './components/qualification/Qualification';
// import Work from './components/Portfolio/Work';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import { Auth0Provider } from '@auth0/auth0-react';


const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
      <Auth0Provider
          domain="dev-c4crw5imbgu6axa8.us.auth0.com"
          clientId="cOe5QtuKBI0J8OhZZd3edQN1cyNqfLKZ"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
        <Home />
        <About />
        <Dev />
        <Skills />
        <Services />
        <Qualification />




        <Contact />
        <Welcome />


          <Auth />
          </Auth0Provider>
      </main>


      <Footer />
      <ScrollUp />
    </>
  )
}

export default App