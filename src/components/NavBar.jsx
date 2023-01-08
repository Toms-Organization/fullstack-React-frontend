import React from 'react';

const NavBar = ({ isMenuShown, setIsMenuShown }) => {
  return (
    <>
      <sectio>
        <div className="flex justify-between items-center w-full h-40 px-5 py-5  text-white bg-black">
          <div>
            <h1 className="flex text-5xl font-signature ml-2 justify-start">
              Tom Ganemo
            </h1>
          </div>
        </div>
      </sectio>
    </>
  );
};

export default NavBar;
