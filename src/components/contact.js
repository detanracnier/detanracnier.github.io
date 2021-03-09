import React from "react";

export default function Contact() {

    // Contact Info
    return (
        <section id="three" className="wrapper style1 fade-up">
            <div className="inner">
                <h2>How to contact me...</h2>
                <section>
                    <ul className="contact">
                        <li>
                            <h3>Address</h3>
                            <span>Bloomington, MN<br />
									USA</span>
                        </li>
                        <li>
                            <h3>Email</h3>
                            <a href="mailto: spencerrosio3d@gmail.com">spencerrosio3d@gmail.com</a>
                        </li>
                        <li>
                            <h3>Phone</h3>
                            <span>(612) 242-9184</span>
                        </li>
                        <li>
                            <h3>Social</h3>
                            <ul className="icons">
                                <li><a href="https://github.com/detanracnier" className="icon brands fa-github"><span className="label">GitHub</span></a>
                                </li>
                                <li><a href="https://www.linkedin.com/in/spencer-rosio-14300714/" className="icon brands fa-linkedin-in"><span
                                    className="label">LinkedIn</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <h3>Resume</h3>
                            <ul className="icons">
                                <li>
                                    <a href="./data/SpencerRosioResume.pdf" download="spencer-rosio-resume">Download Resume</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
		</section >
    )
};