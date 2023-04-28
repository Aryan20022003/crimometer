import React, { useState } from 'react';
import getCrimeData from './logic';
import Advisiory from './Advisory';

// function Form() {
//   const [place, setplace] = useState('');
//   const [month, setmonth] = useState(1);
//   const [temp1, settemp] = useState(null);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const temp = getCrimeData(place, month);
//     console.log('after this');
//     console.log(temp);
//     settemp([<Advisiory data={temp} />]);
//   };

function Form() {
  const [place, setplace] = useState('agartala');
  const [month, setmonth] = useState(1);
  const [temp1, settemp] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const temp = await getCrimeData(place, month);
      console.log('after this');
      console.log(temp);
      // settemp([<Advisory data={temp} />]);
      settemp([<Advisiory data={temp} />]);
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };

  return (
    <section className="Landing">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Get circular</h1>
            <p className="py-6 text-2">
              Please input the Place and month in which you want to visit the
              place
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit}
              className="max-w-full flex flex-col p-3 gap-2"
            >
              <label className="text-left text-2xl inline-block">Place</label>
              <input
                type="text"
                placeholder="Input Place"
                defaultValue="agartala"
                className="input input-bordered input-success w-full "
                onChange={(e) => setplace(e.target.value)}
              />
              <labe className="inline-block text-2xl">Month</labe>
              <select
                className="select select-success w-full mb-3"
                onChange={(e) => setmonth(e.target.value)}
              >
                <option disabled selected>
                  Pick the Month
                </option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <button className="btn btn-success" type="submit">
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
      {temp1}
    </section>
  );
}

export default Form;
