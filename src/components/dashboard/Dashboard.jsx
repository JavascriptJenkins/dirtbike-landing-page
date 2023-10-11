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
      <h2 className="section__title">Dashboard</h2>
      <span className="section__subtitle">Manage your deliveries here</span>

      <div className="dashboard__container container grid">
        <div className="dashboard__content">

        </div>

        {/*  This is where we will call the java server running on host 8080 */}
        <div className="dashboard__content">
          <h3 className="dashboard__title">This will be a dashboard that changes depending on your status as a manager, employee, or runner!</h3>

        </div>
      </div>
    </section>
  );
  } else {

  }


};

export default Dashboard;
