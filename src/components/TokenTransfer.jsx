import React, { useState } from 'react';
import Web3 from 'web3';

const TokenTransfer = ({ token, walletAddress }) => {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');

  const transferTokens = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const tokenContract = new web3.eth.Contract([
      {
        "constant": false,
        "inputs": [
          { "name": "_to", "type": "address" },
          { "name": "_value", "type": "uint256" }
        ],
        "name": "transfer",
        "outputs": [{ "name": "", "type": "bool" }],
        "type": "function"
      }
    ], token);

    await tokenContract.methods.transfer(recipientAddress, web3.utils.toWei(amount, 'ether')).send({ from: walletAddress });
  };

  return (
    <div>
      <h4>Transfer Tokens</h4>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipientAddress}
        onChange={(e) => setRecipientAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={transferTokens}>Transfer</button>
    </div>
  );
};

export default TokenTransfer;
