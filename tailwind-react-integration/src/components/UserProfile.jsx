import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 lg:p-10 max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-lg mx-auto my-20 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      <div className="flex flex-col items-center">
        <img
          src="/path/to/profile-image.jpg"
          alt="Profile"
          className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl text-blue-800 my-4 font-bold transition-colors duration-300 ease-in-out hover:text-blue-500">
          John Doe
        </h1>
        <p className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-600 mt-2 text-center">
          A short description about John Doe goes here. It provides a brief overview of the user.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;














