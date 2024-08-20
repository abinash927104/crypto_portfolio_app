import Web3 from "web3";

async function sendEther(){
    const provider=new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

    const web3=new Web3(provider);
    const transact= await web3.eth.sendTransaction({
        from:"0x0a269548267548aa6B1436702a9c2844C54Ee986",
        to:"0xCE2F53dDD9990280be694f1e3a0D75417401A817",
        value:web3.utils.toWei("10","ether")
    });
    console.log(transact);
}
sendEther();