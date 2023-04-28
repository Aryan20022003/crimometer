import React from 'react';

const Record = (props) => {
    const { toatlCrimes, crimes } = props.data;
    // alert(props.data);
    // return;
    return (
        <section className="List">
            <div className="alert shadow-lg mb-4">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Crime Type</th>
                                <th>Crime Count</th>
                                <th>Crime Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {crimes.map((items, index) => {
                                return (
                                    <tr className="active" id={index}>
                                        <th>{items.type}</th>
                                        <th>{items.count}</th>
                                        <th>{items.rate}</th>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
export default Record;
