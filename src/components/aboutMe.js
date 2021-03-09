import React from "react";

export default function AboutMe() {

    // About me
    return (
        <section id="one" className="wrapper style2 spotlights">
			<section>
				<a href="#pic" className="image"><img src="picOfMe.jpg" alt="" data-position="center center" /></a>
				<div className="content">
					<div className="inner">
						<h2>A little about me...</h2>
						<p>I am a developer who continually strives to learn new technologies and seek out process improvements. I have a strong media background which allows me to work well with both creatives and users to understand their struggles and seek out solutions.</p>
						<p>I have a penchant for strategic process improvement and enjoy developing modern implementations based on tried and true solutions.</p>
						<p>I am very passionate about problem solving and exploring new ways to solve old problems. I've
							used these skills to write scripts, develop automation, and pioneer new systems to increase
							efficiency for a variety of tasks.</p>
					</div>
				</div>
			</section>
		</section>
    )
};