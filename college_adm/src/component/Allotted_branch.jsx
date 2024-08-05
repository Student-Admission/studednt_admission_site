import React, { useState, useEffect } from 'react';
import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function Example() {
  const [personalDetails, setPersonalDetails] = useState(null);

  useEffect(() => {
    const fetchPersonalDetails = async () => {
      try {
        const response = await fetch('/api/personal_details_get');
        const data = await response.json();
        setPersonalDetails(data[0]);//will change once we can get data for specific users using api call only
      } catch (error) {
        console.error('Error fetching personal details:', error);
      }
    };

    fetchPersonalDetails();
  }, []);

  if (!personalDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Branch allotment Details</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {personalDetails.first_name} {personalDetails.last_name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Phone number</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {personalDetails.phone_no}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {personalDetails.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {personalDetails.address}, {personalDetails.city}, {personalDetails.state}, {personalDetails.postal_code}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Branch</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
             
              {personalDetails.allotted_branch || 'Not allocated,please wait for further rounds'}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
