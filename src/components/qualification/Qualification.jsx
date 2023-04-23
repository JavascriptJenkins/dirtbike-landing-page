import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">Staff Achievements</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Titles
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Architect</h3>
                <span className="qualification__subtitle">
                  Optum - UHG
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 10+ years
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Principal Engineer</h3>
                <span className="qualification__subtitle">
                  F500 companies
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 10+ years
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Technical Director</h3>
                <span className="qualification__subtitle">
                  Large consulting firm
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 10+ years
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">Product Owner</h3>
                <span className="qualification__subtitle">
                  Technical Product Designer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 10+ years
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Q/A</h3>
                <span className="qualification__subtitle">
                  Software Quality Assurance
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 10+ years
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Software Security Scanning</h3>
                <span className="qualification__subtitle">
                  F500 Companies
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 10+ years
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UI/UX Design</h3>
                <span className="qualification__subtitle">F500 companies</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 10+ years
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
