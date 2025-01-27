const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545"); 

const contractAddress = "Our Address";
const contractABI = [
  // Our ABI
];

const contract = new web3.eth.Contract(contractABI, contractAddress);
// FUNCTION - getEventDetails
async function getEventDetails(eventId) {
    try {
        const eventDetails = await contract.methods.getEventDetails(eventId).call();
        console.log("Event details:", eventDetails);
        return eventDetails;
    } catch (error) {
        console.error("Error while fetching event details:", error);
        return null;
    }
}