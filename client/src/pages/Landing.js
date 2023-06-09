import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            react job <span>tracking</span> app
          </h1>
          <p>
            Our React job tracking app makes it easy to stay organized and on
            track during your job search. With our app, you can easily create
            and manage job applications, track your progress, and stay
            up-to-date on new job postings. Try our app today and see how it can
            help you land your dream job!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt image" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
