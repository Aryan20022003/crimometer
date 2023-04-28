import React from 'react';
import './response.css';
const ResponseCard = (props) => {
    return <div className="card w-full lg:w-2/4 h-4/5 bg-base-100 shadow-xl overflow-x-scroll overflow-y-scroll responsecard">
        <div className="card-body">
            <h2 className="card-title">AI generated Advisory</h2>
            <p>{props.data}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Copy</button>
            </div>
        </div>
    </div>
}
export default ResponseCard;
