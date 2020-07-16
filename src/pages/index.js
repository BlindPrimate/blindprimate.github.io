import React from 'react';

import Layout from '../components/Layout';
import ProjectList from '../components/ProjectList';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <h3 className="mb-0"> Software Developer </h3>
          <div className="subheading mb-5">
            {config.address} ·  
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I'm a biology nerd who wandered out of the lab one day and realized 
            I wanted to be a computer nerd instead.  I'm expereinced at leveraging
            modern frameworks and technologies to accomplish business goals.  
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          <ProjectList />
        </div>

      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer / Systems Administrator</h3>
              <div className="subheading mb-3">Lakenetwork</div>
                <ul className="resume-list">
                  <li>
                    <p>Developed &amp; maintained multiple wordpress sites and laravel applications</p>
                  </li>
                  <li>
                    <p>Designed procedure for moving client sites to new VPS-based 
                    web-hosting solution to save the company time and money by consolidating
                     hosts</p>
                  </li>
                  <li>
                    <p>Automated server and hosting maintenance tasks to reduce spent 
                    resources on non-critical work</p>
                  </li>
                  <li>
                    <p>Provided instruction to clients on the use of wordpress and software related to the maintenance of their websites </p>
                  </li>
                  <li>
                    <p>Performed technical support, customer service, and training for clients on various projects </p>
                  </li>

                </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2015-2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Customer Service Representative / Dairy Lead</h3>
              <div className="subheading mb-3">Giant Eagle Grocery</div>
              <ul className="resume-list">
                <li>
                  <p>Dealt with special customer requests and ensured customer satisfaction </p> 
                </li>
                <li>
                  <p>Trained new employees in dairy, frozen, and grocery departments</p>
                </li>
              </ul>

            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2011 - March 2013</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Western Governors University</h3>
              <div className="subheading mb-3">BS Computer Science</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Expected Graduation: Nov 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Lakeland Community College</h3>
              <div className="subheading mb-3">AAS Bioscience Technology</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2014</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Ohio State University</h3>
              <div className="subheading mb-3">Biology / Computer Science</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2008-2010</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-3">Skills</h2>

          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <ul className="inline-list">
            <li>
              <div className="subheading mb-3">
                Programming Languages &amp; Tools
              </div>
              <ul className="mb-0">
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Javascript
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Python
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Java
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  React
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Redux
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Docker
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  MongoDB
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  PostgreSQL
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Node
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Express
                </li>
              </ul>
            </li>
            <li>
              <div className="subheading mb-3">
                Skills &amp; Technologies
              </div>
              <ul className="mb-4">
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Linux Command Line
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Unit Testing
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  User Training &amp; Orientation
                </li>
              </ul>
              <div className="subheading mb-3">
                Personal Skills
              </div>
              <ul className="mb-0">
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Analytical Skills
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Works equally well on teams or independently
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Quick Learner
                </li>
                <li>
                  <i className="fa fa-gap fa-check"></i>
                  Excellent Communicator
                </li>
              </ul>

            </li>
          </ul>

        </div>
      </section>

      <hr className="m-0" />



      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>Aside from development, I spend my days playing music, cooking and reading. 
          On the occassion that I find myself unwillingly dragged outside, 
          I enjoy walking in the local parks and exploring my city.  </p>
          <p className="mb-0">
            I like all things sci-fi.  Love to play video games, and try to keep spending 
            a lot of my free time furthering my education.  Learning new things is what keeps me going.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa fa-li fas fa-certificate text-warning"></i>
              CompTIA Project+
            </li>
            <li>
              <i className="fa fa-li fas fa-certificate text-warning"></i>
              ITIL Foundations
            </li>
            <li>
              <i className="fa fa-li fas fa-certificate text-warning"></i>
              MTA Networking Fundamentals
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
