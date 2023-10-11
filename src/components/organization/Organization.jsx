import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Home  from '../home/Home.jsx'
import "./organization.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const Organization = () => {

    const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout, getAccessTokenSilently } =
        useAuth0();


const [activeNav, setActiveNav] = useState("#home");
    const name = {value: ''};
    const description = {value: ''};
//     const navigation = useNavigate()


   const form = useRef();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }





  // what is e?
  let postFormData = async (e) => {
      e.preventDefault();
      try {


      console.log(JSON.stringify({
                                    name:name.value,
                                    description:description.value
                                  }));



        const token = await getAccessTokenSilently();




        let res = await fetch("http://localhost:8080/api/organization/create", {
          method: "POST",
          mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
          body: JSON.stringify({
            name:name.value,
            description:description.value
          }),


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

if (isAuthenticated) {
  return (


    <section className="organization section" id="organization">
      <h2 className="section__title">Create a new Organization</h2>
      <span className="section__subtitle">Onboard your business here!</span>

      <div className="organization__container container grid">
        <div className="organization__content">

        </div>

        {/*  This is where we will call the java server running on host 8080 */}
        <div className="organization__content">
          <h3 className="organization__title">Fill out the form below!</h3>

            {/*  this submits the organization form*/}
          <form ref={form} onSubmit={postFormData} className="organization__form">
            <div className="organization__form-div">
              <label className="organization__form-tag">Business Name</label>
              <input
                type="text"
                name="name"
                className="organization__form-input"
                placeholder="Insert your business name"
                onChange={(e) => name.value = e.target.value}
              />
            </div>

            <div className="organization__form-div organization__form-area">
              <label className="organization__form-tag">Description</label>
              <textarea
                name="description"
                // this onChange is the thing that binds the data to json object to be sent
                onChange={(e) => description.value = e.target.value}
                cols="30"
                rows="10"
                className="organization__form-input"
                placeholder="Describe your business"
              ></textarea>
            </div>

            <button className="button button--flex">
              Create Organization
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
  } else {

  }


};

export default Organization;
