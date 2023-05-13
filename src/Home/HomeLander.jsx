import React from 'react';
import LottieAnimation from './Animation.jsx';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import './HomeLander.css';

const Home = () => {
  return (
    <>
      <section className="flex flex-col-reverse gap-2 md:flex-row w-11/12 mx-auto mt-4 md:py-11">
        <div className="content md:w-1/2">
          <h1 className="title">
            Keeping You Safe: The Power of{' '}
            <Typed
              strings={[
                'Predictive Policing',
                'AI Generated Advisory',
                'Crimometer',
              ]}
              typeSpeed={80}
              backSpeed={120}
              loop
            />
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
          <Link to="/generate">
            <button className="btn btn-success mt-2 md:mt-4 rounded-full">
              Try Crimometer
            </button>
          </Link>
        </div>
        <div className="Animation">
          <LottieAnimation />
        </div>
      </section>
      <footer className='pt-3' style={{ textAlign: 'center' }}>
        Designed and developed by{' '}
        <a
          href="https://github.com/Arnabdaz"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'turquoise',
          }}
        >
          Arnab
        </a>{' '}
        &{' '}
        <a
          href="https://github.com/Aryan20022003"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'turquoise',
          }}
        >
          Aryan
        </a>{' '}
        | © 2023 All rights reserved.
      </footer>
    </>
  );
};

export default Home;
