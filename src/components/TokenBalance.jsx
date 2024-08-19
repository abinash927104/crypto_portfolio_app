import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const TokenBalance = ({ token, walletAddress }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      const web3 = new Web3(Web3.givenProvider);
      const tokenContract = new web3.eth.Contract([
        {
          "constant": true,
          "inputs": [{ "name": "_owner", "type": "address" }],
          "name": "balanceOf",
          "outputs": [{ "name": "balance", "type": "uint256" }],
          "type": "function"
        }
      ], token);
      const balance = await tokenContract.methods.balanceOf(walletAddress).call();
      setBalance(balance);
    };
    fetchBalance();
  }, [token, walletAddress]);

  return (
    <div>
      <p>Token: {token}</p>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default TokenBalance;
