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
  const [place, setplace] = useState('');
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
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-full flex flex-col p-3 gap-2"
      >
        <label className="text-left text-2xl inline-block">Place</label>
        <input
          type="text"
          placeholder="Input Place"
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
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        <button className="btn btn-success" type="submit">
          Go
        </button>
      </form>
      {temp1}
    </>
  );
}

export default Form;
