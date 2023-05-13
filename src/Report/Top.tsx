import React from "react";

const months = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
};

type Props = {
    month: number;
    location: string;
    totalCrimes: number;
}

const Top = function (props: Props): JSX.Element {
    return (
        <div className="stats shadow bg-[#19376D]">
            <div className="stat place-items-center text-gray-300">
                <div className="stat-title">Place</div>
                <div className="stat-value">{props.location.toUpperCase()}</div>
                <div className="stat-desc">Record of Month {months[props.month]}</div>
            </div>
            <div className="stat place-items-center">
                <div className="stat-title">Case Count</div>
                <div className="stat-value text-secondary text-orange-300">{props.totalCrimes}</div>
            </div>
        </div>
    );
};

export default Top;
