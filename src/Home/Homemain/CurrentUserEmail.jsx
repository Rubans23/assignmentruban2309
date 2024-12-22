import React from 'react';
import { useSelector } from 'react-redux';

const CurrentUserEmail = () => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  return (
    <div>
        <p>Logged in as: {currentUser.email}</p>
    </div>
  );
};

//new

export default CurrentUserEmail;
