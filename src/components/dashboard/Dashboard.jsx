import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import "./dashboard.css";



const Dashboard = () => {

    const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
        useAuth0();

    const name = {value: ''};
    const email = {value: ''};
    const project = {value: ''};
    const message = {value: ''};


console.log("Dashboard now!!!")
   const form = useRef();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }





  // what is e?
  let submitCustomerPipelineFormData = async (e) => {
      e.preventDefault();
      try {

      console.log(JSON.stringify({
                                    name:name,
                                    email:email,
                                    project:project
                                    // name: name,
                                    // email: email,
                                    // project: project,
                                  }));

        let res = await fetch("https://services.techvvs.io/customer/pipeline", {
          method: "POST",
          mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
            },
          body: JSON.stringify({
            name:name,
            email:email,
            project:project
          }),


        });
        console.log("res: "+res);
        let resJson = await res.json();

        console.log("resJson: " +resJson)
        if (res.status === 200) {
          alert("Thank you for dashboarding TechVVS!")
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


    <section className="dashboard section" id="dashboard">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Dashboard Us</span>

      <div className="dashboard__container container grid">
        <div className="dashboard__content">
          {/* <h3 className="dashboard__title">Talk to us</h3>

          <div className="dashboard__info">
            <div className="dashboard__card">
              <i className="bx bx-mail-send dashboard__card-icon"></i>

              <h3 className="dashboard__card-title">Email</h3>
              <span className="dashboard__card-data">user@gmail.com</span>

              <a
                href="mailto:examplemail@gmail.com.com"
                className="dashboard__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt dashboard__button-icon"></i>
              </a>
            </div>

            <div className="dashboard__card">
              <i className="bx bxl-whatsapp dashboard__card-icon"></i>

              <h3 className="dashboard__card-title">Whatsapp</h3>
              <span className="dashboard__card-data">999-888-777</span>

              <a
                href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!"
                className="dashboard__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt dashboard__button-icon"></i>
              </a>
            </div>

            <div className="dashboard__card">
              <i className="bx bxl-messenger dashboard__card-icon"></i>

              <h3 className="dashboard__card-title">Messenger</h3>
              <span className="dashboard__card-data">user.fb123</span>

              <a href="https://m.me/crypticalcoder" className="dashboard__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt dashboard__button-icon"></i>
              </a>
            </div>
          </div> */}
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=300 N Washington Ave, Minneapolis, MN 55401, Estados Unidos&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>

        {/*  This is where we will call the java server running on host 8080 */}
        <div className="dashboard__content">
          <h3 className="dashboard__title">Let us know how we can help!</h3>

            {/*  this submits the dashboard form*/}
          <form ref={form} onSubmit={submitCustomerPipelineFormData} className="dashboard__form">
            <div className="dashboard__form-div">
              <label className="dashboard__form-tag">Name/CORP</label>
              <input
                type="text"
                name="name"
                className="dashboard__form-input"
                placeholder="Insert your name"
                onChange={(e) => name.value = e.target.value}
              />
            </div>

            <div className="dashboard__form-div">
              <label className="dashboard__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                onChange={(e) => email.value = e.target.value}
                className="dashboard__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="dashboard__form-div dashboard__form-area">
              <label className="dashboard__form-tag">Proposal</label>
              <textarea
                name="project"
                // this onChange is the thing that binds the data to json object to be sent
                onChange={(e) => project.value = e.target.value}
                cols="30"
                rows="10"
                className="dashboard__form-input"
                placeholder="Write your proposal here"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
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

export default Dashboard;
