import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Jam from "./Jam";

class Home extends React.Component{
    render(){
        return(
    <div className="one">
    <nav 
    className="navbar navbar-expand-sm navbar-dark bg-light"
    style={{
        padding:'5px 50px 5px 50px'
    }}
    >
        <a 
        href="#" 
        className="navbar-dark"
        >
        <img 
        src="/assets/img/logo-ALTA.png"
        alt=""/></a>
    <div className="collapse navbar-collapse" id="navbarNav">
        <div className="mx-auto"></div>
            <ul className="navbar-nav">
            <li className="nav-item">
                <a 
                className="nav-link"
                href="#"
                style={{
                    color:'orange'
                }}
                >
                HOME
                </a>
            </li>
            <li className="nav-item">
                <a 
                className="nav-link text-dark"
                href="#">
                ABOUT
                </a>
            </li>
            <li className="nav-item">
                {/* <a 
                className="nav-link text-dark"
                href="#">
                News
                </a> */}

                <Link 
                className="nav-link text-dark" 
                to="/News">
                NEWS</Link>
            </li>

            <li className="nav-item">
                {/* <a 
                className="nav-link text-dark" 
                href="#">
                CONTACT
                </a> */}
                <Link 
                className="nav-link text-dark" 
                to="/Contact_Us">
                CONTACT</Link>
            </li>
            </ul>
        </div>
    </nav>

    <Jam/>
    
    <div className="content">
        <div className="content-left">
        <img
        src="/assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
        alt=""/
        >
        </div>

        <div className="content-right">
            <h3>Hi, My Name Is </h3>
            <p>Anne Sullivan</p>
            <h2>I built Things For The Web</h2>
            <button
            type="button" 
            className="btn mt-4"
            style={{
                background:'orange',
                color:'white'
            }}
            >
            Get In Touch
            </button>
        </div>
        </div>
    </div>
        )
    }
}

export default Home