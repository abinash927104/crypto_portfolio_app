import React, { useState } from 'react';
import './Home.css'
//import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import WatchList from './WatchList';
import TokenBalance from './TokenBalance';
import HistoricalData from './HistoricalData';
import Allowance from './Allowence';
import TokenTransfer from './TokenTransfer';
import GetBalance from './GetBalance';
import Header from './Header';

const Home = () => {
  const [walletAddress, setWalletAddress] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [spenderAddress, setSpenderAddress] = useState('');

  const connectWallet = async () => {
   // const provider = await detectEthereumProvider();
   const provider=new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
    if (provider) {
     // const web3 = new Web3(provider);
       const web3=new Web3(provider);
      try {
       // const accounts = await web3.eth.requestAccounts();
       const accounts=await web3.eth.getAccounts();
     //  console.log(accounts);
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("User rejected request");
      }
    } else {
      console.log('Please install Metamask!');
    }
  };

  const addToken = (token) => {
    setTokens([...tokens, token]);
  };

  return (
    <div>
      <Header/>
      <button className='connectWalletBtn' onClick={connectWallet}>Connect Wallet</button>
      {walletAddress && <p>Connected Wallet: {walletAddress}</p>}
      <WatchList tokens={tokens} addToken={addToken} />
      <input
        type="text"
        placeholder="Enter Spender Address"
        value={spenderAddress}
        onChange={(e) => setSpenderAddress(e.target.value)}
      />
      {tokens.map((token, index) => (
        <div key={index}>
          <TokenBalance token={token} walletAddress={walletAddress} />
          <HistoricalData token={token} />
          <Allowance token={token} walletAddress={walletAddress} spenderAddress={spenderAddress} />
          <TokenTransfer token={token} walletAddress={walletAddress} />
          <GetBalance/>
        </div>
      ))}
    </div>
  );
};

export default Home;