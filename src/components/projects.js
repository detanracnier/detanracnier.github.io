import React from "react";
import projectData from "../data/projects.json";
import Project from "./project.js";

export default function Projects() {

    return (
        <section id="two" className="wrapper style3 fade-up">
            <div className="inner">
                <h2>What I've accomplished...</h2>
                <p>I always want to be learning and pushing the boundries of my education. Here are some of my most
                recent works which implement new technologies or practice programming concepts I wish to develop a
					mastery over.</p>
                <div className="features">
                        {projectData.map((project) => {
                            return (
                                <Project key={project.title} project={project} />
                            )
                        })}
                </div>
            </div>
        </section>
    )
};