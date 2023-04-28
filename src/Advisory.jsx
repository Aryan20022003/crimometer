import React, { useState } from "react";
import Record from "./List";
import generateTravelAdvisory from './getAPI';
import ResponseCard from "./ResponseCard";

const Advisiory = function (props) {
    const [generatedText, setGeneratedText] = useState('');
    // Fetch the travel advisory and update the intermediate generated text
    const { location, month, crimes: crimeData } = props.data;
    console.log("hello world");
    console.log(location, month, crimeData,);
    const fetchTravelAdvisory = async () => {
        console.log("gpt button");
        try {
            const text = await generateTravelAdvisory(location, month, crimeData);
            setGeneratedText(text);
        } catch (error) {
            setGeneratedText('AI is OFFLINE');
        }
    };
    return <section className="p-4 ">
        <h3 className="text-5xl text-gray-400 pb-3">Total Number of Crime : {props.data.totalCrimes}</h3>
        <section className="mt-1 mx-auto flex flex-col lg:flex-row lg:gap-10 lg:justify-center" >
            <div className="lg:mx-2">
                <Record data={props.data} />
                <button className="btn btn-active btn-accent ml-2" onClick={fetchTravelAdvisory}>Generate AI advisory</button>
            </div>
            {/* <div className="p-2 w-1/3 h- bg-white">
                <h3 className="">AI Generated circular</h3>
                <p>{generatedText}</p>
            </div> */}
            <ResponseCard data={generatedText} />
        </section>
    </section>

};

export default Advisiory;
