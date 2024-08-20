import  Web3  from 'web3';


async function connect(){
    const provider=new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
    const web3=new Web3(provider);
   // console.log(web3);

   const accounts=await web3.eth.getAccounts();
   //console.log(accounts[0]);

   const balanceinWei=await web3.eth.getBalance(accounts[0]);
  // console.log(balanceinWei);
   const balanceinEther=web3.utils.fromWei(balanceinWei,'ether');
   //console.log(balanceinEther)

   
}
//connect();
export default  connect;