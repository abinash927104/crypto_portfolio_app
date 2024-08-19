import React, { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import WatchList from './WatchList';
import TokenBalance from './TokenBalance';
import HistoricalData from './HistoricalData';

const Home = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [tokens, setTokens] = useState([]);
  
    const connectWallet = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);
        try {
          const accounts = await web3.eth.requestAccounts();
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
        <button onClick={connectWallet}>Connect Wallet</button>
        {walletAddress && <p>Connected Wallet: {walletAddress}</p>}
        <WatchList tokens={tokens} addToken={addToken} />
        {tokens.map((token, index) => (
          <div key={index}>
            <TokenBalance token={token} walletAddress={walletAddress} />
            <HistoricalData token={token} />
          </div>
        ))}
      </div>
    );
  };
  
  export default Home;
  