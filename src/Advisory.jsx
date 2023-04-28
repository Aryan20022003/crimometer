import React from "react";
import Record from "./List";
const advisory = function (props) {
    return <section className="mt-1 mx-auto flex flex-col lg:flex-row p-4 bg-transparent w-3/4">
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <Record data={props.data}/>
            </div>
            <div className="divider lg:divider-horizontal">And</div>
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <h1 className="font-normal text-left text-xl to-gray-400">Final Advice</h1>
                <p className="text-base bg-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, commodi aspernatur porro labore laboriosam minus mollitia quam ratione iste soluta ipsa delectus? Nisi repellat perferendis maxime molestiae quibusdam molestias eligendi.</p>
            </div>
        </div>
    </section>

};

export default advisory
