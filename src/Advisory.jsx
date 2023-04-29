import React, { useState } from 'react';
import Record from './List';
import generateTravelAdvisory from './getAPI';
import ResponseCard from './ResponseCard';
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const Advisiory = function (props) {
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const [generated, setGenerated] = useState(false);
  const { location, month, crimes: crimeData, totalCrimes } = props.data;

  if (totalCrimes === 0) {
    return (
      <h3 className="text-5xl text-gray-400 pb-3 text-center pt-5 pb-5">{`No crime during ${
        monthNames[month - 1]
      }`}</h3>
    );
  }

  const fetchTravelAdvisory = async () => {
    setLoading(true); // Set loading to true on fetch start
    console.log('gpt button');
    try {
      const text = await generateTravelAdvisory(location, month, crimeData);
      setGeneratedText(text);
    } catch (error) {
      setGeneratedText('AI is OFFLINE');
    } finally {
      setLoading(false);
      setGenerated(true);
    } // Set loading to false on fetch end
  };

  return (
    <section className="p-4 ">
      <h3 className="text-5xl text-gray-400 pb-3 text-center">
        Total Number of Crime : {totalCrimes}
      </h3>
      <section className="mt-1 mx-auto flex flex-col lg:flex-row lg:gap-10 lg:justify-center">
        <div className="lg:mx-2 centerCustom">
          <Record data={props.data} />
          <div className="flex justify-center">
            <button
              className="btn btn-success btn-accent"
              onClick={fetchTravelAdvisory}
              disabled={loading || generated}
            >
              {generated
                ? 'AI Advisory already generated'
                : loading
                ? 'Loading...'
                : 'Generate AI advisory'}
            </button>
          </div>
        </div>
        {generatedText ? <ResponseCard data={generatedText} /> : null}
      </section>
    </section>
  );
};

export default Advisiory;
