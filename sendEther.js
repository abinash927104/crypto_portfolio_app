import Web3 from "web3";

async function sendEther(){
    const provider=new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

    const web3=new Web3(provider);
    const transact= await web3.eth.sendTransaction({
        from:"0xA1499a15008a13548f93005BB5c4A8ACAc0fF632",
        to:"0x55d527Ae9651e17DF98dC18e523dF3473846585C",
        value:web3.utils.toWei("10","ether")
    });
    console.log(transact);
}
sendEther();