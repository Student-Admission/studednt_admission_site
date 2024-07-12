import React from 'react'
import { useState } from 'react';

const Academic_details = () => {

    const [inputs, setInputs] = useState({
		application_no_1: "",
		application_no_2: "",
		rank_1: "",
        rank_2:"",
		application_no_adv:"",
        rank_adv:"",
        percentage_12:"",
        percentage_10:""
	});

    const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(inputs);
	};


  return (
    <form onSubmit={handleSubmit}>
    <h2 className="text-base font-semibold leading-7 text-gray-900">Academic Details</h2>
    <div className="border-b border-gray-900/10 pb-12 pl-60 " >
        
       

        <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <label htmlFor="application_no_1" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Application Number JEE MAINS(Attempt 1)
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="application_no_1"
                        id="application_no_1"
                        autoComplete="off"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputs.application_no_1}
                        onChange={(e) => setInputs({ ...inputs, application_no_1: e.target.value })}
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="rank_1" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Rank
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="rank_1"
                        id="rank_1"
                        autoComplete="off"
                        className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputs.rank_1}
                        onChange={(e) => setInputs({ ...inputs, rank_1: e.target.value })}
                    />
                </div>
            </div>





            <div className="sm:col-span-3">
                <label htmlFor="application_no_2" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Application Number JEE MAINS(Attempt 2)
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="application_no_2"
                        id="application_no_2"
                        autoComplete="off"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputs.application_no_2}
                        onChange={(e) => setInputs({ ...inputs, application_no_2: e.target.value })}
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="rank_2" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Rank
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="rank_2"
                        id="rank_2"
                        autoComplete="off"
                        className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputs.rank_2}
                        onChange={(e) => setInputs({ ...inputs, rank_2: e.target.value })}
                    />
                </div>
            </div>


            <div className="sm:col-span-3">
                <label htmlFor="application_no_adv" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Application Number JEE ADVANCE
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="application_no_adv"
                        id="application_no_adv"
                        autoComplete="off"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputs.application_no_adv}
                        onChange={(e) => setInputs({ ...inputs, application_no_adv: e.target.value })}
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="rank_adv" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Rank
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="rank_adv"
                        id="rank_adv"
                        autoComplete="off"
                        className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputs.rank_adv}
                        onChange={(e) => setInputs({ ...inputs, rank_adv: e.target.value })}
                    />
                </div>
            </div>

            <div className="sm:col-span-full">
                <label htmlFor="percentage_12" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                   Class 12'th Percentage
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="percentage_12"
                        id="percentage_12"
                        autoComplete="off"
                        className="block w-1/7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputs.percentage_12}
                        onChange={(e) => setInputs({ ...inputs,percentage_12: e.target.value })}
                    />
                </div>
            </div>




            <div className="sm:col-span-full">
                <label htmlFor="percentage_10" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                        Class 10'th Percentage
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="percentage_10"
                        id="percentage_10"
                        autoComplete="off"
                        className="block w-1/7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={inputs.percentage_10}
                        onChange={(e) => setInputs({ ...inputs,percentage_10: e.target.value })}
                    />
                </div>
            </div>



            

            

           

            

            
        </div>
    </div>
                    <div>
 						<button className='btn btn-block btn-sm mt-2  border border-slate-700 ' style={{ width: '32%' }}>Submit & Next</button>
 					</div>
</form>
  )
}

export default Academic_details
