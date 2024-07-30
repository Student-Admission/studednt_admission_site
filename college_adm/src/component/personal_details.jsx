import axios from 'axios';
import React, { useState } from 'react';

const Personal_details = ({ handleNext }) => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    try {
      await axios.post(
        'http://localhost:5001/api/v1/data/personal_details',
        { ...inputs, userId },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      handleNext(); // Navigate to the next step
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

    return (
        <form onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900 pb-[25px] pt-[15px]">Personal Information</h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                        <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={inputs.first_name}
                                onChange={(e) => setInputs({ ...inputs, first_name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                autoComplete="family-name"
                                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={inputs.last_name}
                                onChange={(e) => setInputs({ ...inputs, last_name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-full">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-[32%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={inputs.email}
                                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-full">
                        <label htmlFor="phone_no" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            Mobile Number
                        </label>
                        <div className="mt-2">
                            <input
                                id="phone_no"
                                name="phone_no"
                                type="tel"
                                autoComplete="tel"
                                className="block w-[32%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={inputs.phone_no}
                                onChange={(e) => setInputs({ ...inputs, phone_no: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            Address
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="address"
                                id="address"
                                autoComplete="street-address"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={inputs.address}
                                onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            City
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={inputs.city}
                                onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            State
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="state"
                                id="state"
                                autoComplete="address-level1"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={inputs.state}
                                onChange={(e) => setInputs({ ...inputs, state: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="postal_code" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            ZIP / Postal code
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="postal_code"
                                id="postal_code"
                                autoComplete="postal-code"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={inputs.postal_code}
                                onChange={(e) => setInputs({ ...inputs, postal_code: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6 mb-8">
                <button type="submit" className="btn btn-block btn-sm border border-slate-700" style={{ width: '32%' }}>Submit & Next</button>
            </div>
        </form>
    );
}

export default Personal_details;
