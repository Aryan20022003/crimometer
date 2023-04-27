import React from "react"
import Form from "./Input"

const Landing = () => {
    return (
        <section className="Landing">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Get circular</h1>
                        <p className="py-6 text-2">Please input the Place and month in which you want to visit the place</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Landing;