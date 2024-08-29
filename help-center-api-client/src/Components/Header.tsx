import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-custom-black text-custom-white p-4 flex justify-around items-center mt-1 mx-1 rounded-t-lg">
      <div className="text-xl font-bold">Abstract | Help Center</div>
      <button className="bg-custom-button-bg text-custom-white px-4 py-2 rounded">Submit a request</button>
    </header>
  );
};

export default Header;
