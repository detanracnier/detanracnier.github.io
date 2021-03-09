import React from "react";

export default function Project(props) {
    const p = props.project;

    return (
        <section>

            <h3>{p.title}</h3>
            {p.description.map((paragraph) => {
                return (
                    <p key={paragraph.description}>{paragraph}</p>
                )
            })}
            <p>
                    <a href={p.deployed_link}>Deployed site</a><br />
                    <a href={p.github_link}>Github</a>
            </p>
        </section>
    )
};