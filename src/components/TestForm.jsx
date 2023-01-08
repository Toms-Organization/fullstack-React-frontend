import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
import { useSelector } from 'react-redux';

const TestForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
    alert('Goodbye ' + inputs.name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      'Welcome to my page ' +
        inputs.name +
        '. Let me know what you think about it!'
    );
  };
  return (
    <div className="flex text-3xl font-plaintext ml-2">
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="name"
            value={inputs.name || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your reason for visiting:
          <input
            type="text"
            name="reason"
            value={inputs.reason || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your email:
          <input
            type="text"
            name="email"
            value={inputs.email || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <button
          onClick={() =>
            dispatch(
              login({
                name: inputs.name,
                reason: inputs.reason,
                email: inputs.email,
              })
            )
          }
        >
          LOGIN
        </button>
        <br />
        <button onClick={handleLogout}>LOGOUT</button>
      </form>
    </div>
  );
};

export default TestForm;
