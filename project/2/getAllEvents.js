const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545"); 

const contractAddress = "Our Address";
const contractABI = [
  // Our ABI
];

const contract = new web3.eth.Contract(contractABI, contractAddress);
// FUNCTION - getAllEvents
async function getAllEvents() {
    try {
        const events = await contract.methods.getAllEvents().call();
        console.log("List of all events:", events);
        return events;
    } catch (error) {
        console.error("Error while fetching events list:", error);
        return [];
    }
}