import React from 'react';

const TomsSideBar = () => {
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
    <div>
      <div>
        <ul>
          {links.map(({ id, link }) => (
            <li key={id}>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TomsSideBar;
