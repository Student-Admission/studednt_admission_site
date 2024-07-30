import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5001/api/v1/auth/getUserData',
        {},
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        }
      );
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch user data');
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
