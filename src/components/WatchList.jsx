import React, { useState } from 'react';

const WatchList = ({ tokens, addToken }) => {
  const [token, setToken] = useState('');

  const handleAddToken = () => {
    if (token) {
      addToken(token);
      setToken('');
    }
  };

  return (
    <div>
      <h3>Watch List</h3>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Add token address"
      />
      <button onClick={handleAddToken}>Add</button>
      <ul>
        {tokens.map((token, index) => (
          <li key={index}>{token}</li>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
