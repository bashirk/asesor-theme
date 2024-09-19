import React from 'react';

export const NavButtons: React.FC = () => {
  return (
    <div className="flex gap-4">
      <button className="text-sm px-4 py-2 text-white bg-transparent border border-white rounded hover:bg-white hover:text-black transition-colors">Log In</button>
      <button className="btn btn-primary">Get Started</button>
    </div>
  );
};