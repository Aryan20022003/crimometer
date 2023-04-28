import React from "react";

const Record = (props) => {
    const { toatlcrime, crimes } = props.data;
    alert(props.data);
    return;
    return <section className="List">
        <div className="alert shadow-lg mb-4">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{toatlcrime}</span>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Crime Type</th>
                            <th>Crime Count</th>
                            <th>Crime Rate</th>
                        </tr>
                    </thead>
                    <thead>
                        {crimes.map((items, index) => { return <tr className="active" id={index}><th>items.type</th><th>items.count</th><th>items.rate</th></tr> })};
                    </thead>
                </table>
            </div>
        </div>
    </section>
}
export default Record;