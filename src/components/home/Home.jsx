import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { useAuth0 } from "@auth0/auth0-react";




const Home = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();



  let getOrganizationByUserID = async (e) => {
      e.preventDefault();
      try {



//         const token = await getAccessTokenSilently();




        let res = await fetch("http://localhost:8080/api/organization/create", {
          method: "POST",
          mode: 'cors', // no-cors, *cors, same-origin
            headers: {
//                 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
//           body: JSON.stringify({
//             name:name.value,
//             description:description.value
//           }),


        });
        console.log("res: "+res);
        let resJson = await res.json();

        console.log("resJson: " +resJson)
        if (res.status === 200) {
//         document.getElementsByClassName('organization section')[0].style.visibility = 'hidden';
//             window.location.href = 'http://localhost:3000/';
           // this.setActiveNav("#home")

//            navigation("/dashboard",{state :{ name : "home"}, replace:true})
//         alert("Thank you for organizationing TechVVS!")
          // setName("");
          // setEmail("");
          // setMessage("User created successfully");
        } else {
          alert("error")

          // setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };
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
