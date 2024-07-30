import axios from 'axios';
import React, { useState } from 'react';
const Preferences = ({ handleNext }) => {
    const [inputs, setInputs] = useState({
        preference_1: "",
        preference_2: "",
        preference_3: "",
        preference_4: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        try {
          await axios.post('http://localhost:5001/api/v1/data/preferences',{ ...inputs, userId },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
        } catch (error) {
          console.error('There was an error!', error);
        }
      };

    return (
        <form onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900 pb-[25px] pt-[15px]">Branch Preferences</h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <div className="sm:col-span-full text-left">
                        <label htmlFor="preference_1" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            First Preference
                        </label>
                        <select
                            name="preference_1"
                            id="preference_1"
                            className="select select-info sm:w-1/3"
                            style={{ width: '32%' }}
                            value={inputs.preference_1}
                            onChange={(e) => setInputs({ ...inputs, preference_1: e.target.value })}
                        >
                            <option value="" disabled>Select Branch</option>
                            <option>CSE</option>
                            <option>CCE</option>
                            <option>ECE</option>
                            <option>MECH</option>
                        </select>
                    </div>

                    <div className="sm:col-span-full text-left">
                        <label htmlFor="preference_2" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            Second Preference
                        </label>
                        <select
                            name="preference_2"
                            id="preference_2"
                            className="select select-info sm:w-1/3"
                            style={{ width: '32%' }}
                            value={inputs.preference_2}
                            onChange={(e) => setInputs({ ...inputs, preference_2: e.target.value })}
                        >
                            <option value="" disabled>Select Branch</option>
                            <option>NONE</option>
                            <option>CSE</option>
                            <option>CCE</option>
                            <option>ECE</option>
                            <option>MECH</option>
                        </select>
                    </div>

                    <div className="sm:col-span-full text-left">
                        <label htmlFor="preference_3" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            Third Preference
                        </label>
                        <select
                            name="preference_3"
                            id="preference_3"
                            className="select select-info sm:w-1/3"
                            style={{ width: '32%' }}
                            value={inputs.preference_3}
                            onChange={(e) => setInputs({ ...inputs, preference_3: e.target.value })}
                        >
                            <option value="" disabled>Select Branch</option>
                            <option>NONE</option>
                            <option>CSE</option>
                            <option>CCE</option>
                            <option>ECE</option>
                            <option>MECH</option>
                        </select>
                    </div>

                    <div className="sm:col-span-full text-left">
                        <label htmlFor="preference_4" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                            Fourth Preference
                        </label>
                        <select
                            name="preference_4"
                            id="preference_4"
                            className="select select-info sm:w-1/3"
                            style={{ width: '32%' }}
                            value={inputs.preference_4}
                            onChange={(e) => setInputs({ ...inputs, preference_4: e.target.value })}
                        >
                            <option value="" disabled>Select Branch</option>
                            <option>NONE</option>
                            <option>CSE</option>
                            <option>CCE</option>
                            <option>ECE</option>
                            <option>MECH</option>
                        </select>
                    </div>

                </div>
            </div>
            <div className="flex justify-center mt-6 mb-8">
                <button className="btn btn-block btn-sm border border-slate-700" style={{ width: '32%' }}>Submit & Next</button>
            </div>
        </form>
    );
}

export default Preferences;
