import React from 'react';

const SideBar = () => {
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
      <SideBar>
        <ul className="display:inline">
          {links.map(({ id, link }) => (
            <li key={id}>{link}</li>
          ))}
        </ul>
      </SideBar>
    </div>
  );
};

export default SideBar;
