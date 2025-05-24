import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('http://localhost:3000/api/career-details', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        setError(err.response?.data?.message || 'Failed to load profile');
      });
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Career Stage:</strong> {user.careerStage}
      </p>
      <p>
        <strong>Skills:</strong> {user.skills}
      </p>
      <p>
        <strong>Learning Goals:</strong> {user.learningGoals}
      </p>
      <p>
        <strong>Time Availability:</strong> {user.timeAvailability}
      </p>
    </div>
  );
};

export default ProfilePage;
