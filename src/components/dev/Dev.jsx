import React, { useState } from "react";
import "./dev.css";
import Hand from "./Hand";


const Dev = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="dev section" id="dev">
      <h2 className="section__title">Meet our Team</h2>
      <span className="section__subtitle">Find out about us!</span>

      <div className="dev__container__1 container grid">

        {/* DEVELOPER 1 */}

        <div className="dev__content dev__toby">
          <div>
            <i className="uil uil-web-grid dev__icon"></i>
            <h3 className="dev__title">
              CTO <br /> Principal Architecture
            </h3>
          </div>

          <span className="dev__button" onClick={() => toggleTab(1)}>
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>


          <div
            className={
              toggleState === 1
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Toby</h3>
              <p className="dev__modal-description">
                Toby has been working with major companies for 25+ years.
              </p>

              <ul className="dev__modal-dev grid">
                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    In his free time, he enjoys playing classical music and designing board games.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">25+ years specializing in java.</p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Expert in budgeting and solutioning enterprise technical issues.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Toby has managed more teams and projects than he can remember.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Toby is an expert creating custom solutions to broad cross-team enterprise issues.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DEVELOPER 2 */}

        <div className="dev__content dev__peter">
          <div>
            <i className="uil uil-arrow dev__icon"></i>
            <h3 className="dev__title">
              Technical <br /> Director
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="dev__button">
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Peter</h3>
              <p className="dev__modal-description">
                Peter McMahon has been involved with technology solutions since a young age.
              </p>

              <ul className="dev__modal-dev grid">
                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    In his free time, Peter enjoys hiking and bicycling.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">Full stack development solutions.</p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Expert in project management, server cost estimation, cloud infrastructure, security.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Data protection compliance.  Healthcare/Finance/Government sector specialization.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    10+ years specializing in java.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="dev__container__2 container grid">

        {/* DEVELOPER 3 */}

        <div className="dev__content dev__odin">
          <div>

            {/* React Boxicon img */}
            {/* <i className="bx bxl-react dev__icon"></i> */}

            <i className="uil uil-edit dev__icon"></i>
            <h3 className="dev__title">
              UI/UX <br /> React
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="dev__button">
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Odin</h3>
              <p className="dev__modal-description">
                Odin has been a UI/UX specialist for 3+ years.
              </p>

              <ul className="dev__modal-dev grid">
                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    In his spare time, Odin enjoys walking his Pomeranian.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">Web page development.  SPA applications. </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    UI/UX Wireframe/Mockups
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Front end integrations.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Custom mobile UI/UX development.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DEVELOPER 4 */}

        <div className="dev__content dev__adam">
          <div>
            <i className="uil uil-web-grid dev__icon"></i>
            <h3 className="dev__title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="dev__button" onClick={() => toggleTab(4)}>
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>


          <div
            className={
              toggleState === 4
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Adam</h3>
              <p className="dev__modal-description">
                Adam is an expert coder and product owner.
              </p>

              <ul className="dev__modal-dev grid">
                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    In his free time, Adam enjoys playing with his golden retriever at parks in Seattle.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">Java Specialist 10+ years.</p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Adam has excellent communication skills along with excellent technical skills.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Adam can work with you to design your technical product vision.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Has been working in the Seattle area 5+ years in demanding roles.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DEVELOPER 5 */}

        <div className="dev__content dev__joeBoat">
          <div>
            <i className="uil uil-arrow dev__icon"></i>
            <h3 className="dev__title">
              Data <br /> Expert
            </h3>
          </div>

          <span onClick={() => toggleTab(5)} className="dev__button">
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 5
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Joe</h3>
              <p className="dev__modal-description">
                Joe is an expert in a variety of data analysis tools.
              </p>

              <ul className="dev__modal-dev grid">
                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    In his spare time, Joe enjoys ice fishing and outdoor activities.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">Generate custom data reports.</p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Analyze data looking for trends.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Organize and re-structure data.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Database design expert.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DEVELOPER 6 */}

        <div className="dev__content dev__joeMiami">
          <div>
            <i className="uil uil-edit dev__icon"></i>
            <h3 className="dev__title">
              Software <br /> Engineering
            </h3>
          </div>

          <span onClick={() => toggleTab(6)} className="dev__button">
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 6
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Joe A.</h3>
              <p className="dev__modal-description">
                Joe A. has been working as a full stack dev java specialist for 8+ years with enterprise clients.
              </p>

              <ul className="dev__modal-dev grid">
                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    In his free time, Joe A. enjoys walking his dog with his fiance in Miami.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">Web page development.  SPA applications. </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Backend or frontend development.  Specialized Integrations.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Security vulnerability scanning and resolving.  Stay secure and compliant.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Software Architecture Services.  Pipeline maintenance/design
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DEVELOPER 7 */}

        <div className="dev__content dev__veerav">
          <div>
            <i className="uil uil-edit dev__icon"></i>
            <h3 className="dev__title">
              Software <br /> Engineering
            </h3>
          </div>

          <span onClick={() => toggleTab(7)} className="dev__button">
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 7
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Veerav</h3>
              <p className="dev__modal-description">
                Veerav has been providing quality software work to enterprise clients for 10+ years.
              </p>

              <ul className="dev__modal-dev grid">
                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    In his free time, Veerav enjoys going to new restaurants.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">Web page development.  SPA applications. </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Backend or frontend development.  Specialized Integrations.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Security vulnerability scanning and resolving.  Stay secure and compliant.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Java specialist, server maintenance, SRE.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DEVELOPER 8 */}

        <div className="dev__content dev__isaac">
          <div>
            <i className="uil uil-edit dev__icon"></i>
            <h3 className="dev__title">
              Software <br /> Engineering / QA
            </h3>
          </div>

          <span onClick={() => toggleTab(8)} className="dev__button">
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 8
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Isaac</h3>
              <p className="dev__modal-description">
                Isaac is a QA/Developer Specialist.
              </p>

              <ul className="dev__modal-dev grid">
                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    In his spare time, Isaac enjoys thrift store shopping and hiking in Los Angelos.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">Web page development.  SPA applications. </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Backend or frontend development.  Specialized Integrations.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Security vulnerability scanning and resolving.  Stay secure and compliant.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Smoke testing, automation, REST api testing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="dev__container__3 container grid">

        {/* DEVELOPER 9 */}

        <div className="dev__content dev__ryan">
          <div>
            <i className="uil uil-web-grid dev__icon"></i>
            <h3 className="dev__title">
              Director of <br /> Sales
            </h3>
          </div>

          <span className="dev__button" onClick={() => toggleTab(9)}>
            <Hand />
            <i className="uil uil-arrow-right dev__button-icon"></i>
          </span>


          <div
            className={
              toggleState === 9
                ? "dev__modal active-modal"
                : "dev__modal"
            }
          >
            <div className="dev__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times dev__modal-close"
              ></i>

              <h3 className="dev__modal-title">Ryan</h3>
              <p className="dev__modal-description">
                Ryan is the point of contact for sales.
              </p>

              <ul className="dev__modal-dev grid">
                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Ryan is as knowledgeable as he is personable.
                  </p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">In his free time, Ryan enjoys listening to live music in Portland OR.</p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">Find out what technical product will solve your problem.</p>
                </li>

                <li className="dev__modal-service">
                  <i className="uil uil-check-circle dev__modal-icon"></i>
                  <p className="dev__modal-info">
                    Get to the root of the technical issue and apply the correct solution.
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

    </section >
  );
};

export default Dev;
