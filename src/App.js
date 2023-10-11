import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Auth from './components/auth/Auth';
import Organization from './components/organization/Organization';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import { Auth0Provider } from '@auth0/auth0-react';


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