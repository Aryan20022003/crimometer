import React from "react";
import LottieAnimation from "./Animation.jsx";
import { Link } from "react-router-dom";
import "./HomeLander.css"
const Home = () => {
    return <section className="flex flex-col-reverse gap-2 md:flex-row  w-11/12 mx-auto mt-4 py-11">
        <div className="content md:w-1/2">
            <h1 className="title">
                Keeping You Safe: The Power of Predictive Policing
            </h1>
            <p className="discription pt-4 text-lg">
                "At Crimo Meter, our commitment is to empower communities with the tools they need to stay safe and prevent crime. By leveraging cutting-edge technology and innovative solutions, we're taking a proactive approach to crime prevention by issuing timely advisories to residents, visitors, and businesses in high-risk areas. Our mission is to create a safer world for everyone, and we invite you to join us in making this vision a reality."
            </p>
            <Link to="/generate">
                <button className="btn btn-success mt-4 rounded-full">Try Crimo Meter</button>
            </Link>
        </div>
        <div className="Animation">
            <LottieAnimation />
        </div>

    </section>
}

export default Home;