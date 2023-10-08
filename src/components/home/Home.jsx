import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { useAuth0 } from "@auth0/auth0-react";




const Home = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Oops... {error.message}</div>;
//   }

  if (isAuthenticated) {
    return (

        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <Social />

              <div className="home__img"></div>

              <Data />
            </div>
                 <div>
                   Hello {user.name}
                   {' / nickname: '}{user.nickname}{' '}
                   {' / email: '}{user.email}{' '}
                   {' / blocked: '}{user.blocked}{' '}
                   {' / created_at: '}{user.created_at}{' '}
                   {' / email_verified: '}{user.email_verified}{' '}
                   {' / phone_number: '}{user.phone_number}{' '}

                   <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                     Log out
                   </button>
                 </div>

          </div>

        </section>

    );
  } else {
  return (
          <section className="home section" id="home">
            <div className="home__container container grid">
              <div className="home__content grid">
                <Social />

                <div className="home__img"></div>

                <Data />
              </div>

              <ScrollDown />
            </div>

          </section>
          )
  }



};

export default Home;
