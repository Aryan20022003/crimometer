import React from 'react';
import Top from './Top.tsx';
import DataBlock from './DataBlock.tsx';
interface DataType {
  crimeDiscription: { string: string[] },
  location: string,
  totalCrimes: number,
  month: number,
}

function Report() {
  const data: DataType = JSON.parse(localStorage.getItem("data")!);
  console.log(data.crimeDiscription);
  return (
    <div className='detailed mx-auto p-3 md:w-11/12 flex gap-1 flex-col mt-3'>
      <h1 className='font-semibold text-center text-slate-300 text-4xl pb-3'>Detailed Crime Report</h1>
      <Top month={data.month} totalCrimes={data.totalCrimes} location={data.location} />
      <p className='pl-1 text-xl pt-6 pb-1'>Click on the cards To know more</p>
      <DataBlock crimeDiscription={data.crimeDiscription} />
    </div>

  );
}

export default Report;
