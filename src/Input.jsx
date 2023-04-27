import React, { useState } from 'react';

function Form() {
    const [place, setplace] = useState('');
    const [month, setmonth] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("got it");
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-full flex flex-col p-3 gap-2">
            <label className='text-left text-2xl inline-block'>Place</label>
            <input type="text" placeholder="Input Place" className="input input-bordered input-success w-full " onChange={(e) => setplace(e.target.value)} />
            <labe className="inline-block text-2xl">
                Month
            </labe>
            <select className="select select-success w-full mb-3" onSelect={(e) => setmonth(e.target.value)}>
                <option disabled selected>Pick the Month</option>
                <option>Jan</option>
                <option>Feb</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
            </select>
            <button className="btn btn-success" type='submit'>Go</button>
        </form>
    );
}

export default Form;
