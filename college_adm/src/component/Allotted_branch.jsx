import React, { useEffect, useState } from 'react';

const AllocatedBranch = () => {
  const [personalDetails, setPersonalDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonalDetails = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/v1/data/personal_details_get');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPersonalDetails(data[0]); // Assuming the API returns an array with user details
      } catch (error) {
        setError(error);
        console.error('Error fetching personal details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonalDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching personal details: {error.message}</div>;
  }

  if (!personalDetails) {
    return <div>No personal details found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <div className="text-center px-4 sm:px-0">
          <h3 className="text-lg font-semibold leading-7 text-gray-900">Branch Allotment Details</h3>
          <p className="mt-10 max-w-2xl text-sm leading-6 text-gray-500 text-left">Personal details and application.</p>
        </div>
        <div className="mt-10 border-t border-gray-200">
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
              {personalDetails.allotted_branch ? personalDetails.allotted_branch : 'Not allocated yet'}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AllocatedBranch;
