import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const Allowance = ({ token, walletAddress, spenderAddress }) => {
  const [allowance, setAllowance] = useState(null);

  useEffect(() => {
    const fetchAllowance = async () => {
      const web3 = new Web3(Web3.givenProvider);
      const tokenContract = new web3.eth.Contract([
        {
          "constant": true,
          "inputs": [
            { "name": "_owner", "type": "address" },
            { "name": "_spender", "type": "address" }
          ],
          "name": "allowance",
          "outputs": [{ "name": "remaining", "type": "uint256" }],
          "type": "function"
        }
      ], token);

      const allowance = await tokenContract.methods.allowance(walletAddress, spenderAddress).call();
      setAllowance(allowance);
    };
    fetchAllowance();
  }, [token, walletAddress, spenderAddress]);

  return (
    <div>
      <h4>Allowance</h4>
      <p>Spender Address: {spenderAddress}</p>
      <p>Allowance: {allowance}</p>
    </div>
  );
};

export default Allowance;
