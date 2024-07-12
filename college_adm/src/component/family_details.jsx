import { info } from 'autoprefixer';
import React from 'react'
import { useState } from 'react';
const Parents_details = () => {

    const [inputs, setInputs] = useState({
		father_name: "",
		mother_name: "",
		father_occupation: "",
        mother_occupation:"",
		father_number:"",
        mother_number:"",
       
	});

    const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(inputs);
	};


  return (
    <form onSubmit={handleSubmit}>
    <h2 className="text-base font-semibold leading-7 text-gray-900">Parents Details</h2>
    <div className="border-b border-gray-900/10 pb-12 pl-60 " >
        
       

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <label htmlFor="father_name" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Father's Name
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="father_name"
                        id="father_name"
                        autoComplete="off"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ width: '80%' }}
                        value={inputs.father_name}
                        onChange={(e) => setInputs({ ...inputs,father_name: e.target.value })}
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="father_occupation" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Father's Occupation
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="father_occupation"
                        id="father_occupation"
                        autoComplete="off"
                        className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ width: '50%' }}
                        value={inputs.father_occupation}
                        onChange={(e) => setInputs({ ...inputs, father_occupation: e.target.value })}
                    />
                </div>
            </div>





            <div className="sm:col-span-3">
                <label htmlFor="mother_name" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Mother's Name
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="mother_name"
                          id="mother_name"
                        autoComplete="off"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ width: '80%' }}
                        value={inputs.mother_name}
                        onChange={(e) => setInputs({ ...inputs, mother_name: e.target.value })}
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="mother_occupation" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Mother's Occupation
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                      name="mother_occupation"
                        id="mother_occupation"
                        autoComplete="off"
                        className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ width: '50%' }}
                        value={inputs.mother_occupation}
                        onChange={(e) => setInputs({ ...inputs, mother_occupation: e.target.value })}
                    />
                </div>
            </div>


            

            <div className="sm:col-span-full">
                <label htmlFor="father_number" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                  Father's Mobile Number
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                      name="father_number"
                        id="father_number"
                        autoComplete="off"
                        className="block w-1/7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ width: '39%' }}
                        value={inputs.father_number}
                        onChange={(e) => setInputs({ ...inputs,father_number: e.target.value })}
                    />
                </div>
            </div>




            <div className="sm:col-span-full">
                <label htmlFor="mother_number" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                        Mother's Mobile Number
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                      name="mother_number"
                        id="mother_number"
                        autoComplete="off"
                        className="block w-1/7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ width: '39%' }}
                        value={inputs.mother_number}
                        onChange={(e) => setInputs({ ...inputs,mother_number: e.target.value })}
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

export default Parents_details
