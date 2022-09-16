import React from "react";
import headshot from "../images/Headshot.jpg"

export default function AboutMe() {
  return (
    <>
      <section className="sub-section" id="about-me">
        <div className="information">
          <h2>About me</h2>
          <p className="information-body">
            Before becoming a Full Stack Software Developer, I had a career as a
            high school teacher, where I taught History and Science. I have
            always had a deep love for education, but I discovered my true
            passion was in programming while working with complex data sets to
            better understand my students learning needs.</p>
            <p className="information-body">
            Now I am a full stack software developer with experience in C# on the .Net framework and JavaScript using the React.js framework. I am always looking for new opportunities to learn, and
             I am dedicated to
            increasing my knowledge and skills as a software developer so that I
            can help to create and design programs which provide solutions to
            real world problems.
          </p>
        </div>
        <div className="headshot-container">
          <img className="headshot" src={headshot} />
        </div>
      </section>
    </>
  );
}
