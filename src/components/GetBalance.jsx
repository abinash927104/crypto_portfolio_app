//index.js
const { Web3 } = require("web3");
const endpointUrl = "HTTP://127.0.0.1:7545"
const httpProvider = new Web3.providers.HttpProvider(endpointUrl);
const web3Client = new Web3(httpProvider);

const minABI = [
  // balanceOf
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256"}],
    type: "function",
  },
];

const tokenAddress = "0x0d8775f648430679a709e98d2b0cb6250d2887ef";
const walletAddress = "0x0a269548267548aa6B1436702a9c2844C54Ee986";

const contract = new web3Client.eth.Contract(minABI, tokenAddress);

async function GetBalance() {
  const result = await contract.methods.balanceOf(walletAddress).call();

  const resultInEther = web3Client.utils.fromWei(result, "ether");

  console.log(`Balance in wei: ${result}`);

  console.log(`Balance in ether: ${resultInEther}`);

  return (
    <div>
      <p>Token: {tokenAddress}</p>
      <p>Balance: {resultInEther}</p>
    </div>
  );
}

 export default GetBalance;


