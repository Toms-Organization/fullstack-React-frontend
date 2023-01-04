import React from 'react';

const NavBar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'About',
    },
    {
      id: 3,
      link: 'References',
    },
    {
      id: 4,
      link: 'Contact',
    },
  ];

  return (
    <>
      <div>
        <div className="flex justify-between items-center w-full h-40 px-5 py-5  text-white bg-black">
          <div>
            <h1 className="flex text-5xl font-signature ml-2 justify-start">
              Tom Ganemo
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <ul className="display:inline">
              {links.map(({ id, link }) => (
                <li key={id}>{link}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
