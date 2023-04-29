import React from 'react';
import LottieAnimation from './Animation.jsx';
import './HomeLander.css';

const Home = () => {
  return (
    <section className="flex flex-col-reverse gap-2 md:flex-row  w-11/12 mx-auto mt-4 py-11">
      <div className="content md:w-1/2">
        <h1 className="title">
          Keeping You Safe: The Power of Predictive Policing
        </h1>
        <blockquote className="quote pt-4 text-lg">
          <p>
            At Crimometer, we equip communities with vital tools to bolster
            safety and deter crime. Utilizing advanced technology, we
            proactively deliver timely advisories to those in high-risk areas.
            Our goal is a safer world for all, and we invite you to join us in
            realizing this vision.
          </p>
        </blockquote>
      </div>
      <div className="Animation">
        <LottieAnimation />
      </div>
    </section>
  );
};

export default Home;
