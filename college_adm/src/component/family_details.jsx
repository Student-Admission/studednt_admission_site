import React, { useState } from 'react';

const Parents_details = () => {
    const [inputs, setInputs] = useState({
        father_name: "",
        mother_name: "",
        father_occupation: "",
        mother_occupation: "",
        father_number: "",
        mother_number: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Parents Details</h2>
            <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="father_name" className="block text-sm font-medium leading-6 text-gray-900">
                            Father's Name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="father_name"
                                id="father_name"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={inputs.father_name}
                                onChange={(e) => setInputs({ ...inputs, father_name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="father_occupation" className="block text-sm font-medium leading-6 text-gray-900">
                            Father's Occupation
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="father_occupation"
                                id="father_occupation"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={inputs.father_occupation}
                                onChange={(e) => setInputs({ ...inputs, father_occupation: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="mother_name" className="block text-sm font-medium leading-6 text-gray-900">
                            Mother's Name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="mother_name"
                                id="mother_name"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={inputs.mother_name}
                                onChange={(e) => setInputs({ ...inputs, mother_name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="mother_occupation" className="block text-sm font-medium leading-6 text-gray-900">
                            Mother's Occupation
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="mother_occupation"
                                id="mother_occupation"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={inputs.mother_occupation}
                                onChange={(e) => setInputs({ ...inputs, mother_occupation: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-6">
                        <label htmlFor="father_number" className="block text-sm font-medium leading-6 text-gray-900">
                            Father's Mobile Number
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="father_number"
                                id="father_number"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                style={{ width: '49%' }}     
                                value={inputs.father_number}
                                onChange={(e) => setInputs({ ...inputs, father_number: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-6">
                        <label htmlFor="mother_number" className="block text-sm font-medium leading-6 text-gray-900">
                            Mother's Mobile Number
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="mother_number"
                                id="mother_number"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                style={{ width: '49%' }}                               
                                value={inputs.mother_number}
                                onChange={(e) => setInputs({ ...inputs, mother_number: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button
                    type="submit"
                    className="btn btn-block btn-sm border-2 border-black px-4 py-2 rounded-md text-black"
                    style={{ width: '32%' }}
                >
                    Submit & Next
                </button>
            </div>
        </form>
    );
};

export default Parents_details;
