import React from "react";

type Props = {
    crimeDiscription: { [key: string]: string[] };
};

const DataBlock = function (props: Props): JSX.Element {
    if (!Object.keys(props.crimeDiscription).length) {
        return (
            <div className="border border-base-300 bg-base-100 rounded-box bg-[#19366d86]">
                <p className="text-xl font-semibold text-stone-300">
                    No criminal record is available. Enjoy the safety.
                </p>
            </div>
        );
    }

    const data: JSX.Element[] = Object.entries(props.crimeDiscription).map(
        ([key, value]) => {
            return (
                <div
                    tabIndex={0}
                    className="collapse border border-base-300 bg-base-100 rounded-box bg-[#32549571]"
                    key={key}
                >
                    <div className="collapse-title text-xl font-semibold text-stone-300">
                        <p>
                            {key.toUpperCase()} : {value.length}
                        </p>
                    </div>
                    <div className="collapse-content text-lg">
                        {value.map((v, i) => (
                            <p key={i}>
                                {i + 1}: {v}
                            </p>
                        ))}
                    </div>
                </div>
            );
        }
    );

    return <>{data}</>;
};

export default DataBlock;
