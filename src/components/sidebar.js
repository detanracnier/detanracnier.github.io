import React from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Sidebar() {

    // Sidebar
    return (
        // <Router>
            <section id="sidebar">
                <div className="inner">
                    <nav>
                        <ul>
                            {/* <li><Link to={{ hash: "#intro" }}>Welcome</Link></li>
                            <li><Link to={{ hash: "#one" }}>Who am I</Link></li>
                            <li><Link to={{ hash: "#two" }}>What do I do</Link></li>
                            <li><Link to={{ hash: "#three" }}>Get in touch</Link></li> */}
                            <li><a href="#intro">Welcome</a></li>
                            <li><a href="#one">Who am I</a></li>
                            <li><a href="#two">What do I do</a></li>
                            <li><a href="#three">Get in touch</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        // </Router>
    )
};