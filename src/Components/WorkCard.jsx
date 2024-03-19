/* eslint-disable no-unused-vars */
import "./WorkCard.css"
import React from 'react';
import pro1 from "../assets/pro1.jpg"
import pro2 from "../assets/pro2.jpg"
import pro3 from "../assets/pro3.jpg"
import pro4 from "../assets/pro4.jpg"
import pro5 from "../assets/pro5.jpg"
import pro6 from "../assets/pro6.jpg"


const WorkCard = () => {
  return (
    <div className="WorkContainer">
      <h1 className="projectHead">PROJECTS</h1>
        <div className="projectContainer">
          
            <div className="projectCard">
                <img src={pro1} alt="image"/>
                <h2 className="title">FLIGHT TICKET BOOKING WEBSITE</h2>
                <div className="details">
                  <p>Tech stack used in this project are React,SASS,Mongodb,Nodejs.</p>
                  <div className="proBtns">
                    <a href="https://github.com/srihar1234/flight-ticket-booking-frontEnd.git" target="_blank" className="btn">Frontend</a>
                    <a href="https://fly-airlines.netlify.app/" target="_blank"  className="btn">Livesite</a>
                    <a href="https://github.com/srihar1234/flight-ticket-booking-backend.git" target="_blank" className="btn">Backend</a>
                  </div>
                </div>
            </div>

            <div className="projectCard">
                <img src={pro2} alt="image"/>
                <h2 className="title">SITE TO SAVE CONTACT DETAILS</h2>
                <div className="details">
                  <p>Tech stack used in this project are React,css.</p>
                  <div className="proBtns">
                    <a href="https://github.com/srihar1234/fetchApi" target="_blank" className="btn">Source</a>
                    <a href="https://ephemeral-gumdrop-3b626a.netlify.app/" target="_blank"  className="btn">Livesite</a>
                  </div>
                </div>
            </div>

            <div className="projectCard">
                <img src={pro3} alt="image"/>
                <h2 className="title">SHOPPING SITE WITH BILL COUNTER</h2>
                <div className="details">
                  <p>Tech stack used in this project are React,css.</p>
                  <div className="proBtns">
                    <a href="https://github.com/srihar1234/context-API" target="_blank" className="btn">Source</a>
                    <a href="https://sparkling-buttercream-d5104d.netlify.app/" target="_blank"  className="btn">Livesite</a>
                  </div>
                </div>
            </div>

            <div className="projectCard">
                <img src={pro4} alt="image"/>
                <h2 className="title">To-DO List</h2>
                <div className="details">
                  <p>Tech stack used in this project are React,css.</p>
                  <div className="proBtns">
                    <a href="https://github.com/srihar1234/to-do-list.git" target="_blank" className="btn">Source</a>
                    <a href="https://serene-sundae-75a896.netlify.app/" target="_blank"  className="btn">Livesite</a>
                  </div>
                </div>
            </div>

            <div className="projectCard">
                <img src={pro5} alt="image"/>
                <h2 className="title">Pagination</h2>
                <div className="details">
                  <p>Tech stack used in this project are HTML,CSS.</p>
                  <div className="proBtns">
                    <a href="https://github.com/srihar1234/day-15-pagination-task.git" target="_blank" className="btn">Source</a>
                    <a href="https://lovely-moonbeam-3001af.netlify.app/" target="_blank"  className="btn">Livesite</a>
                  </div>
                </div>
            </div>

            <div className="projectCard">
                <img src={pro6} alt="image"/>
                <h2 className="title">Weather update site</h2>
                <div className="details">
                  <p>Tech stack used in this project are React,CSS.</p>
                  <div className="proBtns">
                    <a href="https://github.com/srihar1234/day-20-weather.git" target="_blank" className="btn">Source</a>
                    <a href="https://heroic-gelato-6b7aaa.netlify.app/" target="_blank"  className="btn">Livesite</a>
                  </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkCard
